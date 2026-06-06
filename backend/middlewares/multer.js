import multer from "multer";

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

export const singleUpload = upload.single("image");

export const multiUpload = upload.array("images", 5);
