let fs = require("fs");
const path = require("path"); // get path system
const dirpath = path.join(__dirname, "CRUDfiles");
let fpath = `${dirpath}/test.txt`;

fs.rename(`${dirpath}/test.txt`, `${dirpath}/asd.txt`, (err) => {
    if (err) console.log(err);
    if (!err) console.log("file name is updated");
});
