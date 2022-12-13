const express = require("express");

// Importing the models
const jobVacancy = require("../../Model/jobVacancy.model");
const candidateDetails = require("../../Model/candidateDetails.model");

// Configuring the router
const router = express.Router();
router.post("/stu-log", async function (req, res) {
    const loginCredentials = req.body;
    if (
        loginCredentials.email === "ghoshaniruddha2003@gmail.com" &&
        loginCredentials.password === "Babai@6157201"
    ) {
        res.redirect("/admin");
    } else {
        res.redirect("/");
    }
});
router.post("/repost", function (req, res) {
    const candidateDetail = new candidateDetails;
    candidateDetail.firstName = req.body.firstname;
    candidateDetail.lastName = req.body.lastname;
    candidateDetail.email = req.body.email;
    candidateDetail.city = req.body.city;
    candidateDetail.state = req.body.state;
    candidateDetail.resume = req.body.resume;
    candidateDetail.linkedIN = req.body.linkedIN;
    candidateDetail.gitHub = req.body.github;
    candidateDetail.jobtitle = req.body.jobTitle;
    candidateDetail.jobposition = req.body.jobPosition;
    candidateDetail.save((err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/')
        }
    })
})
router.post("/detpost", function (req, res) {
    const candidateDetail = new candidateDetails;
    candidateDetail.firstName = req.body.firstName;
    candidateDetail.lastName = req.body.lastName;
    candidateDetail.email = req.body.email;
    candidateDetail.city = req.body.city;
    candidateDetail.state = req.body.state;
    candidateDetail.resume = req.body.resume;
    candidateDetail.linkedIN = req.body.LinkedIN;
    candidateDetail.gitHub = req.body.GitHub;
    candidateDetail.jobtitle = req.body.jobTitle;
    candidateDetail.jobposition = req.body.jobPosition;
    candidateDetail.save((err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/candidate')
        }
    })
})
router.post("/job-post", async function (req, res) {
    const jobvacancies = new jobVacancy();
    jobvacancies.companyName = req.body.companyname;
    jobvacancies.position = req.body.position;
    jobvacancies.jobVacancy = req.body.jobVacancy;
    jobvacancies.ctc = req.body.CTC;
    jobvacancies.save((err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect("/admin");
        }
    });
});

module.exports = router;
