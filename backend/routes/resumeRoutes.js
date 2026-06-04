import express from "express";
import { downloadResume } from "../controllers/resumeController.js";

const router = express.Router();

router.get("/download", downloadResume)

export default router;