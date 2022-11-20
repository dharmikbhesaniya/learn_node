const express = require("express");
const path = require("path");
const app = express();
const fpath = path.join(__dirname, "public");

app.use(express.static(fpath));

console.log(fpath);

app.listen(2000);
