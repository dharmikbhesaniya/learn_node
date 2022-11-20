let fs = require("fs");
const path = require("path"); // get path system
const dirpath = path.join(__dirname, "files");
const file = process.argv;

for (let i = 0; i < 5; i++) {
    fs.writeFileSync(dirpath + "/" + file[2] + i + ".txt", file[3]); //peramiter = first file name seconde file text // this is use to create a new file
    // write in terminal = node fssystem filename "in file text"
}

fs.readdir(dirpath, (err, files) => {
    console.log(files);
    files.forEach((i) => {
        console.log(i);
    });
});
