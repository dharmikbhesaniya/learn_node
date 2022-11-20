let fs = require("fs");
const path = require("path"); // get path system
const dirpath = path.join(__dirname, "CRUDfiles");
let fpath = `${dirpath}/test.txt`;

fs.appendFile(`${dirpath}/test.txt`, "this file name is test", (err) => {
    if (!err) console.log("file updated");
});
