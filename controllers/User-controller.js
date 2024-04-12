import User from '../model/User.js'
import bcrypt from "bcryptjs";


export const getAllUser = async (req, res, next) => {
  try {
    let users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "No Users Found!" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};


export const submit = async (req, res, next) => {
  console.log(req.body)
  const { name, email, contact, resume} = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err)
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Already Exists! Login Instead" })
  }


  const newUser = new User({
    name,
    email,
    contact,
    resume,
  });

  try {
    await newUser.save()
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ user: newUser })
};

