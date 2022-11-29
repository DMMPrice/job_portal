const express = require('express');
const path = require("path");
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
//Setting the view engine form html to ejs
app.set('Views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//Using database moldels
const job_vacancy = require('./Model/jobVacancy.model');
//
//Database connection
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const DB = "mongodb+srv://admin:admin@cluster0.lab0nb1.mongodb.net/job?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
    console.log('Database connection successful');
}).catch((err) => {
    console.log(err);
});
//Server routing

app.get('/', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'Views', 'index.html');
    // res.sendFile(htmlFilePath);
    res.render('index');
})

app.get('/login', function (req, res) {
    // const htmlFilePath = path.join(__dirname, 'Views', 'login.html');
    // res.sendFile(htmlFilePath);
    res.render('login');
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
    res.render('Jobs');
})

app.get('/ad', function (req, res) {
    const filePath = path.join(__dirname, 'Controller', 'Data', 'companyDetails.json');
    const fileData = fs.readFileSync(filePath);
    const storedCompanyDetails = JSON.parse(fileData);
    res.render('admin_page', {
        numberOfCompanyDetails: storedCompanyDetails.length,
        companyDetails: storedCompanyDetails
    });
})

app.post('/ad', function (req, res) {
    var jobVacancy = new job_vacancy();
    jobVacancy.companyName = req.body.companyName;
    jobVacancy.position = req.body.position;
    jobVacancy.jobVacancy = req.body.jobVacancy;
    jobVacancy.ctc = req.body.CTC;
    jobVacancy.save((err, data) => {
        if (err) {
            alert("Data not inserted");
        } else {
            alert("Data successfully inserted");
        }
    })
    res.redirect('/ad');
})

app.get('/contact', function (req, res) {
    res.render('Contact');
})

app.get('/register', function (req, res) {
    res.render('register');
})
//Checking the job vacancy model
app.get('/job_vacancy_fill', function (req, res) {
    var loginCredentials = new job_vacancy();
    loginCredentials.companyName = 'CTC';
    loginCredentials.position = 'HR';
    loginCredentials.jobVacancy = 1;
    loginCredentials.ctc = '36 LPA';

    loginCredentials.save((err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.status(200).send({"msg": "Inserted to DB"})
        }
    })
})

//Port Number
port = 3000;
//Listen to the port number
app.listen(port, () => {
//Sever link
    console.log(`Server is running at http://localhost:${port}/`);
});
