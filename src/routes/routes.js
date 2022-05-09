const express = require("express");
const cloudUpload = require("../controller/controller");
const Upload = require("../models/uploadModel");
const router = express.Router();
const upload = require("../middleware/multer");
const saveURL = require("../middleware/saveURL");
router.post("/upload-images", upload.array("image"), cloudUpload);
module.exports = router;
