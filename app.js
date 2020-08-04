const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./src/config/db");

const bot = require("./src/config/telegram-connection");

require("./src/events/index")(bot);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Expose-Headers", "Access-Token, access-token");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
    next();
});
