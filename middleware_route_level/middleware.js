const reqfile = (req, res, next) => {
    console.log("reqfile");
    if (!req.query.age) {
        res.send("please provide age");
    } else if (req.query.age < 18) {
        res.send("note valide ");
    } else {
        next();
    }
};
const info = (req, res, next) => {
    console.log("reqfile");
    if (!req.query.name) {
        res.send("please provide name");
    } else {
        next();
    }
};

module.exports = reqfile;
module.exports = info;
