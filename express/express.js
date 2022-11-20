const express = require("express");

const app = express();

app.get("", (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send(
        "<h1>welcom " +
            req.query.name +
            "</h1>" +
            '<a href="/about">go to about</a>'
    );
});
app.get("/about", (req, res) => {
    res.send(
        `<input type="text" placeholder="user name"/>  <button>click</button> <br /> <a href="/">go to home</a>`
    );
});
app.get("/serv", (req, res) => {
    res.send([
        { name: "dharmik", email: "dharmik@gmail.com" },
        { name: "vishes", email: "vishes@gmail.com" },
        { name: "harsit", email: "harsit@gmail.com" },
        { name: "harsit", email: "harsit@gmail.com" },
    ]);
});

app.listen(2000);
