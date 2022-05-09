const mongoose = require("mongoose");
const uploadsSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});
const Upload = new mongoose.model("Upload", uploadsSchema);
module.exports = Upload;
