/* global require */
/*eslint-env es6*/ // Enables es6 error checking for that file
/*eslint-env jquery*/ // Enables error checking for jquery functions
/*eslint-env browser*/ // Lets you use document and other standard browser functions
/*eslint no-console: 0*/ // Lets you use console (for example to log something)
const bodyParser = require("body-parser");
var fs = require('fs');
var path = require('path');
const Express = require("express");


var app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Express.static('./'));
app.use('/', Express.static(__dirname + '/'));
var db;


app.get('/', (req, res) => {
    console.log("Redirected: home ");
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    console.log("Redirected: about ");
    res.sendFile(__dirname + "/about.html");
});

app.get('/portfolio', (req, res) => {
    console.log("Redirected: portfolio ");
    res.sendFile(__dirname + "/portfolio.html");
});

app.get('/portfolio/tech', (req, res) => {
    console.log("Redirected: tech ");
    res.sendFile(__dirname + "/tech.html");
});

app.get('/portfolio/music', (req, res) => {
    console.log("Redirected: music ");
    res.sendFile(__dirname + "/music.html");
});

app.get('/resume', (req, res) => {
    console.log("Redirected: resume ");
    res.sendFile(__dirname + "/resume.html");
});


app.get('/contact', (req, res) => {
    console.log("Redirected: contact ");
    res.sendFile(__dirname + "/contact.html");
});

/*For Use Debugging the Slideshow Page*/

app.get('/slideshow', (req, res) => {
    console.log("Redirected: slideshow ");
    res.sendFile(__dirname + "/slideshow.html");
});


var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Connected to `" + "Node" + "`on port " + port + " !");
});