const express = require('express');
const path = require("path");
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
//Database connection
const DB = "mongodb+srv://admin:admin@cluster0.lab0nb1.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
    console.log('Database connection successful');
}).catch((err) => {
    console.log(err);
});
//Server routing
app.get('/', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'index.html');
    res.sendFile(htmlFilePath);
})
app.get('/login', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'Views', 'login.html');
    res.sendFile(htmlFilePath);
})
app.post('/login', function (req, res) {
    const loginCredentials = req.body;
    console.log(loginCredentials);
    const filePath = path.join(__dirname, 'Controller', 'Data', 'login_credentials.json');
    const fileData = fs.readFileSync(filePath);
    const storedCredentials = JSON.parse(fileData);
    storedCredentials.push(loginCredentials);
    fs.writeFileSync(filePath, JSON.stringify(storedCredentials));
    res.redirect('/ad');
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
app.listen(port,()=>{
//Sever link
    console.log(`Server is running at http://localhost:${port}/`);
});
