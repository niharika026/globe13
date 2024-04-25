import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/Globe13`)
        console.log(`Connected to Database : ${connnectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection Failed", error)
        process.exit(1)
    }
}

export default connectDB 