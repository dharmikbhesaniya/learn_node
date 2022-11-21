const express = require("express");
const app = express();
const route = express.Route();
const reqfile = require("./middleware");

// app.use(reqfile);
route.use(reqfile);

app.get("/", (req, res) => {
    res.send("welcomto home");
});
route.get("/user", (req, res) => {
    res.send("welcomto user");
});
route.get("/about", (req, res) => {
    res.send("welcomto about");
});
app.use("/", route);

app.listen(2000);
