
import express from "express";
import dotenv from "dotenv"
import userRouter from "./routes/User-routes.js";
import cors from "cors"
import connectDB from "./db/index.js";

dotenv.config({path:"./env"})

const app = express();
app.use(cors())
app.use(express.json());

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => console.log("mongoDB connection failed", error))


//routes
app.use("/api/v1", userRouter);























