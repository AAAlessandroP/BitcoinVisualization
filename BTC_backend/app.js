const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require('cors')
var fetch = require('node-fetch');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config()
var port = process.env.PORT || 3000;
if (process.env.NODE_ENV == 'production')
    home_sito = "https://***.herokuapp.com"
else
    home_sito = "http://localhost:"
app.use(cors())//per tutte le route

const listener = app.listen(port, function () {
    console.log("* Your app is listening on port " + listener.address().port);
})

var oggi = new Date().toISOString().substr(0, 10)
console.log(`oggi`, oggi);
fetch("https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=" + oggi).then(res => {
    res.json().
        then(json => {
            // console.log(`res`, json);
            app.get("/history", (req, res) => {
                res.json(json.bpi)
            })
        })
})

app.get("/", (req, res) => {
    res.send("you're not supposed to view the frontend of a backend!\n the fronted is a cont by its own.")
})