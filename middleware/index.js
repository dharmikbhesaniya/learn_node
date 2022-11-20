const express = require("express");
const app = express();

const reqfile = (req, res, next) => {
    console.log("reqfile");
    if (!req.query.age) {
        res.send("please provide ");
    } else if (req.query.age < 18) {
        res.send("note valide ");
    } else {
        next();
    }
};
app.use(reqfile);

app.get("/", (req, res) => {
    res.send("welcomto home");
});
app.get("/user", (req, res) => {
    res.send("welcomto user");
});

app.listen(2000);
