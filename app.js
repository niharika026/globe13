
import express from "express";
import mongoose from "mongoose";
import router from "./routes/User-routes.js";
import multer from "multer";
import cors from "cors"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
        cb(null, uniqueSuffix)
    }
});

const upload = multer({ storage: storage })

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/user", router);

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json(req.file);
})

mongoose.connect("mongodb+srv://globe13:globe1331@cluster0.zzxvl1a.mongodb.net/submit?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(4000))
    .then(() => console.log("connected to database and listening to localhost 4000"))

    .catch((err) => console.log(err));












