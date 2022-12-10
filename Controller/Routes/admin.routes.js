const express = require('express');
const jobVacancy = require("../../Model/jobVacancy.model");
const candidateDetails = require('../../Model/candidateDetails.model');
const {models} = require("mongoose");
const router = express.Router();

// Showing the query results in the job posting page
router.get('/admin', async function (req, res) {
    // Remember that table name should be same for the table name
    // In this case the table name is jobvacancies
    jobVacancy.find({}, function (err, jobvacancies) {
        res.render('admin', {
            jobList: jobvacancies,
        })
    });
})
router.get('/candidate-post', async function (req, res) {
    // Remember that table name should be same for the table name
    // In this case the table name is jobvacancies
    candidateDetails.find({}, function (err, jobvacancies) {
        res.render('candidate-post', {
            candidateList: candidateList,
        })
    });
})
// Admin Page Login Credentials
router.post('/stu-log', function (req, res) {
    const loginCredentials = req.body;
    if (loginCredentials.email === 'ghoshaniruddha2003@gmail.com'
        && loginCredentials.password === 'Babai@6157201') {
        res.redirect('/admin')
    } else {
        res.redirect('/')
    }
})

router.post('/job-post', function (req, res) {
    const jobvacancies = new jobVacancy;
    jobvacancies.companyName = req.body.companyname;
    jobvacancies.position = req.body.position;
    jobvacancies.jobVacancy = req.body.jobVacancy;
    jobvacancies.ctc = req.body.CTC;
    jobvacancies.save((err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/admin')
        }
    });
})

module.exports = router;