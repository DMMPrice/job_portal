const express = require('express');
// Importing the models
const jobVacancy = require("../../Model/jobVacancy.model");
const candidate= require("../../Model/candidateDetails.model");
const {models} = require("mongoose");
// Configuring the router
const router = express.Router();

// Showing the query results in the job posting page
router.get('/admin', async function (req, res) {
    // Remember that table name should be same for the table name
    // In this case the table name is jobvacancies
    jobVacancy.find({}, function (err, jobvacancies) {
        res.render('admin', {
            jobList: jobvacancies,
        })
    })
});
router.get('/candidate', async function (req, res) {
    candidate.find({}, function (error, candidatedetails) {
       res.render( 'candidates', {
           candidatelist: candidatedetails,
       })
    })
});

module.exports = router;
