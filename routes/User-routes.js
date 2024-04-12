import { Router } from "express";
import { getAllUser , submit  } from "../controllers/User-controller.js";

const router = Router();

router.get("/", getAllUser);
router.post("/submit", submit);

export default router;



