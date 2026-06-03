import mongoose from "mongoose";
import "dotenv/config";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to Database");
    }).catch(error => error.message);
}

export default connectDB;