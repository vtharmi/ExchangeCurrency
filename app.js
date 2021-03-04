const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./routes/index.js");

const app = express();

// Allow CROS ORIGIN
app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
