let fs = require("fs");
fs.readFile("node.js", "utf8", function (err, data) {
    console.log(data);
    console.log(err);
});
