import { User } from '../model/User.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js';


export const getAllUser = async (req, res, next) => {
  try {
    let users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "No Users Found!" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong while fetching users" });
  }
};


export const submit = async (req, res) => {
  const { name, email, phone } = req.body;
  console.log('BODY : ', req.body)
  console.log('FILES : ', req.file)
  if (!name) {
    return res.status(400).json({ message: "Name is required" })
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required" })
  }
  if (!phone) {
    return res.status(400).json({ message: "Phone is required" })
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { phone }]
  })

  if (existedUser) {
    return res.status(400).json({ message: "Form with same email or phone is already submitted!" })
  }

  console.log("REQ_FILES", req.file)

  const resumeLocalPath = req.file?.path;
  console.log("RESUMEPATH", resumeLocalPath)

  if (!resumeLocalPath) {
    throw new Error({ message: "Resume is required!" })
  }

  const resume = await uploadOnCloudinary(resumeLocalPath)
  console.log("Resume", resume)
  if (!resume) {
    throw new Error({ message: "Something went wrong while uploading resume!" })
  }

  const newUser = await User.create({
    name,
    email,
    phone,
    resume: resume.url
  });

  if (!newUser) {
    throw new Error({ message: "Something went wrong while creating user!" })
  }

  const createdUser = await User.findById(newUser._id);


  return res.status(201).json({
    message: "User created successfully!",
    user: createdUser
  })

}

