import { Router } from "express";
import { getAllUser, submit } from "../controllers/User-controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.get("/", getAllUser);
router.post("/", upload.single('file'), submit);

export default router;



