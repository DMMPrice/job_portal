const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

// Using Database models
const jobVacancy = require('./Model/jobVacancy.model');

//Database connection
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const DB = "mongodb+srv://admin:admin@cluster0.lab0nb1.mongodb.net/job?retryWrites=true&w=majority";
mongoose.connect(DB, connectionParams).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(err);
});

//Setting the view engine from html to ejs

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, '/Views'));
app.use(express.static(__dirname + '/Public/'));
app.use(express.urlencoded({extended: true}));

//Server Get Routing

app.get('/', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/index.html');
    res.sendFile(htmlFile);
})

app.get('/about', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/about.html');
    res.sendFile(htmlFile);
})

app.get('/stu-log', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/student_log.html');
    res.sendFile(htmlFile);
})

app.get('/registration', function (req, res) {
    const htmlFile = path.join(__dirname, '/Views', '/student_registration.html');
    res.sendFile(htmlFile);
})

app.get('/admin', function (req, res) {
    // Remember that table name should be same for the table name
    // In this case the table name is jobvacancies
    jobVacancy.find({}, function (err, jobvacancies) {
        res.render('admin', {
            jobList: jobvacancies,
        })
    });
})

//Server posting links
app.post('/stu-log', function (req, res) {
    const loginCredentials = req.body;
    if (loginCredentials.email === 'ghoshaniruddha2003@gmail.com'
        && loginCredentials.password === 'Babai@6157201') {
        res.redirect('/admin')
    } else {
        res.redirect('/')
    }
})

//Server Running URL

port = 5050;
app.listen(port, () => {
//    Server link
    console.log(`Server is running at http://localhost:${port}/`);
});