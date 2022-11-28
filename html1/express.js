const express = require("express");
const path = require("path");
const app = express();
const fpath = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.get("/profile", (req, res) => {
    let user = {
        name: "dharmik",
        email: "asd@gmail.com",
        no: "1234567890",
        skil: ["a", "b", "c"],
    };
    res.render(`profile`, { user });
});
app.get("/login", (req, res) => {
    res.render(`login`);
});
app.get("", (req, res) => {
    res.sendFile(`${fpath}/index.html`);
});
app.get("/about", (req, res) => {
    res.sendFile(`${fpath}/about.html`);
});
app.get("/log", (req, res) => {
    res.sendFile(`${fpath}/log.html`);
});
app.get("*", (req, res) => {
    res.sendFile(`${fpath}/404.html`);
});

console.log(fpath);

app.listen(2000);
 