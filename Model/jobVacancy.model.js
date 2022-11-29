const mongoose = require('mongoose');

const jobVacancySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    jobVacancy: {
        type: Number,
        required: true
    },
    ctc: {
        type: String,
        required: true
    },
});
const jobVacancy = mongoose.model('jobVacancy', jobVacancySchema);
module.exports = jobVacancy;