let fs = require("fs");
const path = require("path"); // get path system
const dirpath = path.join(__dirname, "CRUDfiles");
let fpath = `${dirpath}/test.txt`;

fs.writeFileSync(`${dirpath}/test.txt`, "hello"); //peramiter = first file name seconde file text // this is use to create a new file
