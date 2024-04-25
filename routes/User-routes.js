
import { Router } from "express";
import { getAllUser, submit } from "../controllers/User-controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/users").get(getAllUser);
router.route("/users").post(upload.single("resume"), submit);

export default router;



