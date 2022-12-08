const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

//Setting the view engine from html to ejs
app.set('Views', path.join(__dirname, '/Views'));
app.use(express.static(__dirname + '/Public/'));
app.use(express.urlencoded({extended: true}));

//Server Routing

app.get('/', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/index.html');
    res.sendFile(htmlFile);
})
app.get('/about', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/about.html');
    res.sendFile(htmlFile);
})
app.get('/stu-log', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/stulog.html');
    res.sendFile(htmlFile);
})
app.get('/registration', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/registrationstu.html');
    res.sendFile(htmlFile);
})


//Server Running URL
port = 5050;
app.listen(port, () => {
//    Server link
    console.log(`Server is running at http://localhost:${port}/`);
});