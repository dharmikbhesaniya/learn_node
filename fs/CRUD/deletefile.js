let fs = require("fs");
const path = require("path"); // get path system
const dirpath = path.join(__dirname, "CRUDfiles");
let fpath = `${dirpath}/asd.txt`;

fs.unlinkSync(`${dirpath}/asd.txt`);
