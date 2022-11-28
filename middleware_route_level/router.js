const express = require("express");
const route = express.Router();

route.get("/user", (req, res) => {
    res.send("welcomto user");
});
route.get("/about", (req, res) => {
    res.send("welcomto about");
});

module.exports = route;
