const http = require('http');
const express = require('express');
const app = express();
const cors = require("cors");
const { searchData } = require('./data');
app.use(cors({ origin: "*" }));

app.get('/', function (req: any, res: any) {
    return res.redirect("http://localhost:3001/");
});

app.get('/search', function(req: any, res: any) {
    let email : string = req.query?.email ?? '';
    let number : number|null = parseInt(req.query?.number);
    if (isNaN(number)) number = null;

    let matched_users = searchData(email, number);

    setTimeout(function () {
        res.send({ matched_users: matched_users });
    }, 5000);
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server started in dev-environment at port 3000, good luck!");
});
