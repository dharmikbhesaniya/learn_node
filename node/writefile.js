let fs = require("fs");
// appendfile, writefile, unlink
fs.unlink("node.js", function (err) {
    console.log(err);
    console.log("data deleted");
});
