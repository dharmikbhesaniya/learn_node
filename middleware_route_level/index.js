const express = require("express");
const app = express();
const route = require("./router");
const reqfile = require("./middleware");
const info = require("./middleware");

// appliction level middleware use
// app.use(reqfile);

// route level middleware use
route.use(reqfile);
route.use("/about", info);

app.get("/", (req, res) => {
    res.send("welcomto home");
});

app.use("/", route);

route.get;

app.listen(2000);
