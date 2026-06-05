import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Email = mongoose.model("emails", emailSchema);
export default Email;