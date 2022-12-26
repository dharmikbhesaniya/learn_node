const mongoose = require("mongoose");
//connect to mongodb

mongoose
    .connect("mongodb://127.0.0.1:27017/myProject", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connection successfull..."))
    .catch((err) => console.log(err));
mongoose.Promise = global.Promise;
