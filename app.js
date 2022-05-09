const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/routes");
require("./src/db/db.connection");
const port = process.env.PORT || 8000;
const app = express();
app.use(router);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("Server listening to port 8000");
});
