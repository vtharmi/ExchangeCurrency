const express = require("express");
const getExchange = require("../utils/exchange");

const router = express.Router();

router.post("/convert", (req, res) => {
  getExchange(req.body, (error, data) => {
    if (error) {
      console.log("error is", error);
      res.send({
        error: error,
      });
    } else {
      console.log("result is", data);
      res.send({
        result: data,
      });
    }
  });
});

module.exports = router;
