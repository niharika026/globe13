import { Router } from "express";
import { addNewContact, getAllContact } from "../controllers/Contact-controller.js"


const router = Router();

router.route("/contacts").get(getAllContact);
router.route("/contacts").post(addNewContact);

export default router ;