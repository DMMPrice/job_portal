const mongoose = require('mongoose');

const candidateDetailsSchema = new mongoose.Schema({
    candidateName: {
        type: String,
        required: true
    },
    position: {
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