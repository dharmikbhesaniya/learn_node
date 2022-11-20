let fs = require("fs");
const path = require("path"); // get path system
const dirpath = path.join(__dirname, "CRUDfiles");
let fpath = `${dirpath}/test.txt`;

fs.readFile(`${dirpath}/test.txt`, "utf8", (err, data) => {
    console.log(data);
});
