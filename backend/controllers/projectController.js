import { v2 as cloudinary } from "cloudinary";
import Project from "../models/project.model.js";
import User from "../models/user.model.js";
import Email from "../models/email.model.js";

export const addProject = async (req, res) => {
  try {
    const {
      title,
      subTitle,
      description,
      techStack,
      liveUrl,
      githubUrl,
      category,
      isFeatured,
      status,
    } = req.body;

    let images = req.files;

    if (!title || !subTitle || !description || !category || !status?.trim()) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = req.user._id;

    let imageUrls = [];

    if (images.length > 0) {
      const uploadPromises = images.map((file) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "projects" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            },
          );

          stream.end(file.buffer);
        });
      });

      const results = await Promise.all(uploadPromises);

      imageUrls = results.map((result) => ({
        url: result.secure_url,
        public_id: result.public_id,
      }));
    }

    const newProject = await Project.create({
      title,
      subTitle,
      description,
      techStack,
      images: imageUrls,
      liveUrl,
      githubUrl,
      category,
      isFeatured,
      views: 0,
      status,
      createdBy: user,
    });

    return res.status(200).json({
      success: true,
      message: "Project added successfully",
      newProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in addProject",
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const _id = req.body;

    const project = await Project.findById(_id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    if (project.images.length > 0) {
      for (let img of project.images) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }

    await Project.findByIdAndDelete(_id);
    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in deleteProject",
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const {
      title,
      subTitle,
      description,
      techStack,
      liveUrl,
      githubUrl,
      category,
      isFeatured,
      status,
    } = req.body;

    const { projectId } = req.params;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    let updatedImages = [];

    if (!req.files) {
      updatedImages = project.images;
    } else {
      for (let file of req.files) {
        const result = await cloudinary.uploader.upload(file, {
          folder: "projects",
        });

        updateImages.push({
          url: result.secure_url,
          public_id: result.public_id,
        });
      }
    }

    project.title = title || project.title;
    project.subTitle = subTitle || project.subTitle;
    project.description = description || project.description;
    project.techStack = techStack || project.techStack;
    project.liveUrl = liveUrl || project.liveUrl;
    project.githubUrl = githubUrl || project.githubUrl;
    project.category = category || project.category;
    project.isFeatured = isFeatured || project.isFeatured;
    project.status = status || project.status;
    project.images = updatedImages || project.images;

    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully.",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in updateProject",
      message: error.message,
    });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    if (!projects) {
      return res.status(404).json({
        success: false,
        message: "Projects not found",
      });
    }

    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in getAllProjects",
      message: error.message,
    });
  }
};

export const getSingleProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId).populate(
      "createdBy",
      "-password",
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in getSingleProject",
      message: error.message,
    });
  }
};

export const getEverything = async (req, res) => {
  try {
    const emails = await Email.find();
    const projects = await Project.find();

    if (!emails || !projects) {
      return res.status(404).json({
        success: false,
        message: "No data were found",
      });
    }

    const totalViews = projects.reduce((acc, project) => {
      acc + (project.views || 0);
    }, 0);

    const newData = [
      {
        name: "Total Views",
        value: totalViews || 0,
      },
      {
        name: "Total Projects",
        value: projects.length,
      },
      {
        name: "Total Emails",
        value: emails.length,
      },
    ];

    return res.status(200).json({
      success: true,
      all: newData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in getEverything",
      message: error.message,
    });
  }
};

export const getFeaturedProjects = async (req, res) => {
  try {
    const featuredProjects = await Project.find({ isFeatured: true });

    if (!featuredProjects) {
      return res.status(404).json({
        success: false,
        message: "No featured projects were found."
      });
    }

    return res.status(200).json({
      success: true,
      featuredProjects
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error in featuredProjects",
      message: error.message,
    });
  }
};
