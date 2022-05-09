const express = require("express");
const cloudUpload = require("../controller/controller");
const router = express.Router();
const upload = require("../middleware/multer");
router.post("/upload-images", upload.array("image"), cloudUpload);
module.exports = router;
