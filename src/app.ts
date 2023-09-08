const http = require('http');
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));

app.get('/', function (req, res) {
    return res.redirect("http://localhost:3001/");
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server started in dev-environment at port 3000, good luck!");
});
