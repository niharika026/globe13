import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    contact: {
        type: Number,
        require: true,
        minilength: 10 ,
    },
    resume: {
        type: String,
        require: true,
    },
    
});

export default mongoose.model("User" , userSchema);
