import express from "express";
import { getAllEmails, getEmail, sendEmail } from "../controllers/contactController.js";
import protectRoute from "../middlewares/protectRoute.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = express.Router();

router.post("/send-email", sendEmail);
router.get("/email/:emailId", protectRoute, isAdmin, getEmail);
router.get("/email", protectRoute, isAdmin, getAllEmails);

export default router;