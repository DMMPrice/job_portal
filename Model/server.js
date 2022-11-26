const mongoose = require('mongoose');
//Database connection
const DB = "mongodb+srv://admin:admin@cluster0.lab0nb1.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(err);
});