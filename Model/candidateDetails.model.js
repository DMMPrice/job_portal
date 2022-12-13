const mongoose = require('mongoose');

const candidateDetailsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    linkedIN: {
        type: String,
        required: true
    },
    gitHub: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    jobposition: {
        type: String,
        required: true
    },
});
const candidateDetails = mongoose.model('candidateDetails', candidateDetailsSchema);
module.exports = candidateDetails;