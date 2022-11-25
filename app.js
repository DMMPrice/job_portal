const express = require('express');
const path = require("path");
const app = express();
app.use(express.static('public'));

//Server routing
app.get('/', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'index.html');
    res.sendFile(htmlFilePath);
})
app.get('/login', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'login.html');
    res.sendFile(htmlFilePath);
})
app.get('/jobs', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'Jobs.html');
    res.sendFile(htmlFilePath);
})
app.get('/ad', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'admin_page.html');
    res.sendFile(htmlFilePath);
})
app.get('/contact', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'Contact.html');
    res.sendFile(htmlFilePath);
})
app.get('/register', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'register.html');
    res.sendFile(htmlFilePath);
})

//Port Number
port = 3000;
//Listen to the port number
app.listen(port);
//Sever link
console.log(`Server is running at http://localhost:${port}/`);
