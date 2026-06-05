import express from "express";
import {
  addProject,
  deleteProject,
  getAllProjects,
  getEverything,
  getSingleProject,
  updateProject,
} from "../controllers/projectController.js";
import isAdmin from "../middlewares/isAdmin.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/all", getAllProjects);
router.get("/single/:projectId", getSingleProject);
router.post("/add", protectRoute, isAdmin, addProject); // pending multer middleware
router.delete("/delete", protectRoute, isAdmin, deleteProject);
router.put("/update/:projectId", protectRoute, isAdmin, updateProject); // pending multer middleware
router.get("/everything", protectRoute, isAdmin, getEverything);

export default router;
