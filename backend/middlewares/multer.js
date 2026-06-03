import multer from "multer";

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

export const singleUpload = upload.single("file");

export const multiUpload = upload.array("files", 5);
