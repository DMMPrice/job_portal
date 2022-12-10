const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
// Using the exported admin routes
const admin_routes = require('./Controller/Routes/admin.routes');

// Using Database models
const jobVacancy = require('./Model/jobVacancy.model');
const candidateDetails = require('./Model/candidateDetails.model');


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


app.get('/candidate-post', function (req, res) {
    res.render('candidates');
})
//Server posting links
// Admin Page Login Credentials
app.use('/', admin_routes);

app.post('/respost',function (req, res){
    const candidateDetail= new candidateDetails;
    candidateDetail.firstName=req.body.firstname;
    candidateDetail.lastName=req.body.lastname;
    candidateDetail.email=req.body.email;
    candidateDetail.city=req.body.city;
    candidateDetail.state=req.body.state;
    candidateDetail.resume=req.body.resume;
    candidateDetail.linkedIN=req.body.linkedIN;
    candidateDetail.gitHub=req.body.github;
    candidateDetail.save((err,data) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/')
        }
    })
})
//Server Running URL

port = 5050;
app.listen(port, () => {
//    Server link
    console.log(`Server is running at http://localhost:${port}/`);
});