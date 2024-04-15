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
    number: {
        type: Number,
        require: true,
        minilength: 10 ,
    },
    resume: {
        type: String,
        require: false,
    },
    
});

export default mongoose.model("User" , userSchema);
