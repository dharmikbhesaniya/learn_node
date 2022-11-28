const express = require("express");
const app = express();
const route = require("./router");
const reqfile = require("./middleware");

// app.use(reqfile);
route.use(reqfile);

app.get("/", (req, res) => {
    res.send("welcomto home");
});

app.use("/", route);

route.get;

app.listen(2000);
