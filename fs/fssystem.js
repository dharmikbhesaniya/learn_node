let fs = require("fs");

const file = process.argv;

if (file[2] == "add") {
    fs.writeFileSync(file[3], file[4]); //peramiter = first file name seconde file text // this is use to create a new file
} else if (file[2] == "remove") {
    fs.unlinkSync(file[3]); //peramiter = filename // this is use for remove file
} else {
    console.log("invalid input");
}

// write in terminal = node add/remove fssystem filename "in file text"
