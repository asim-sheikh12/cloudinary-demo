const Upload = require("../models/uploadModel");
const saveURL = (url) => {
  Upload.create(url);
};
module.exports = saveURL;
