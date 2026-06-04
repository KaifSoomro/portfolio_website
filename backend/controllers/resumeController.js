import path from "path";

export const downloadResume = async (req, res) => {
  try {
    const filePath = path.resolve("../backend/public/resume.pdf");
    console.log(process.cwd());

    res.download(filePath, "Kaif_Soomro_CV.pdf");
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error downloading file",
    });
  }
};