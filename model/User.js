
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true,
        unique: true
    },
    resume: {
        type: String, //cloudinary url
        require: true,
    },

});

export const User = mongoose.model("User", userSchema);
