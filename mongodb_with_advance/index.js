const express = require("express");
require("./connect");

const app = express();

app.listen(4000, () => {
    console.log("now listening for requests");
});
