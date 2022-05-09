const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const saveURL = require("../middleware/saveURL");
const cloudUpload = async (req, res) => {
  const uploader = async (path) => await cloudinary.upload(path, "Images");
  if (req.method === "POST") {
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      saveURL(newPath);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    res.status(200).json({
      message: "Images uploaded successfully",
      data: urls,
    });
  } else {
    res.status(405).json({
      err: `${req.method} method is not aloowed`,
    });
  }
};
module.exports = cloudUpload;
