const mongoose = require('mongoose');

const candidateDetailsSchema = new mongoose.Schema({
    candidateName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    gitHub: {
        type: String,
        required: true
    },
    linkedIN: {
        type: String,
        required: true
    },
});
exports.candidateDetails = mongoose.model('candidateDetails', candidateDetailsSchema);