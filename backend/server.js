import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import projectRoute from "./routes/projectRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

const app = express();
const PORT = process.env.PORT || 8000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/project", projectRoute);
app.use("/api/v1/contact", contactRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port: ${PORT}`);
})