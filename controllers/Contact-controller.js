import { Contact } from '../model/Contact.js';


export const getAllContact = async (req, res, next) =>{
    try {
        let Contacts = await Contact.find();
        if(!Contacts) {
            return res.status(404).json({message: "No contact Found!"})
        }
        return res.status(200).json({ Contacts })
    } catch (err) {
        return res.status(400).json({message: "Something went wrong while fetching contact"})
    }
}


export const addNewContact = async (req, res) => {
    const { name , field , phone} = req.body;
    console.log('BODy :' , req.body)

if (!name) {
    return res.status(400).json({message: "name is required"})
}
if (!field) {
    return res.status(400).json({message: "field is required"})
}
if (!phone) {
    return res.status(400).json({message: "phone is required"})
}

const existedContact = await Contact.findOne({
    $or: [{ phone }]
})
if(existedContact) {
    return res.status(400).json({message: "Form with same number is already submitted!" })
}

const newContact = await Contact.create({
    name,
    field,
    phone
})
if(!newContact) {
    throw new Error({message: "Something went wrong while creating Contact!"})
}
const createdContact = await Contact.findById(newContact._id);

return res.status(201).json({
    message: "Contact created successfully!",
    Contact: createdContact
})
}


  