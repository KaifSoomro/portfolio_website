import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadResume = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/resume.pdf");

    return res.download(filePath, "Kaif_Soomro_CV.pdf");
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error downloading file",
    });
  }
};