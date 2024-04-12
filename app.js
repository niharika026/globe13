
import express from "express";
import mongoose from "mongoose";
import router from "./routes/User-routes.js";
import multer from "multer";

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(express.json());
app.use( "/api/user" , router);

app.post('/api/upload', upload.single('file') , (req, res) => {
    res.json(req.file);
})

mongoose.connect("mongodb+srv://globe13:globe1331@cluster0.zzxvl1a.mongodb.net/submit?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(4000))
    .then(() => console.log("connected to database and listening to localhost 4000"))

.catch((err) => console.log(err));












