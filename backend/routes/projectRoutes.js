import express from "express";
import {
  addProject,
  deleteProject,
  getAllProjects,
  getEverything,
  getFeaturedProjects,
  getSingleProject,
  increaseViews,
  updateProject,
} from "../controllers/projectController.js";
import isAdmin from "../middlewares/isAdmin.js";
import protectRoute from "../middlewares/protectRoute.js";
import { multiUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllProjects);
router.get("/single/:projectId", getSingleProject);
router.get("/featured", getFeaturedProjects);
router.post("/increase-views", increaseViews);
router.post("/add", protectRoute, isAdmin, multiUpload, addProject); // pending multer middleware
router.delete("/delete", protectRoute, isAdmin, deleteProject);
router.put("/update/:projectId", protectRoute, isAdmin, updateProject); // pending multer middleware
router.get("/everything", protectRoute, isAdmin, getEverything);

export default router;
