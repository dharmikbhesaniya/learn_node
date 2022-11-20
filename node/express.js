let express = require("express");

let app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});
app.get("/dharmik", function (req, res) {
    res.send("Hello welcome dharmik");
});
app.listen(9001, function (req, res) {
    console.log("running");
});
