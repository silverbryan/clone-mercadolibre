const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
const path = require('path');

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());

const buildDir = path.join(__dirname, '../../client/build')

server.use(express.static(buildDir));

server.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

server.use("/api", routes);
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    res.status(status).send(message);
});

module.exports = server;