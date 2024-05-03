import mongoose, { Schema } from "mongoose";


 const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    field: {
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true,
    }
 })

 export const Contact = mongoose.model("Contact" , userSchema);