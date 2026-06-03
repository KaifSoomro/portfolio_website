import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    techStack: [
      {
        type: String,
        required: true,
      },
    ],

    images: [
      {
        url: {
          type: String
        },
        public_id: {
          type: String
        }
      }
    ],

    liveUrl: {
      type: String,
    },

    githubUrl: {
      type: String,
    },

    category: {
      type: String,
      enum: ["frontend", "backend", "fullstack", "mobile", "other"],
      default: "fullstack",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;