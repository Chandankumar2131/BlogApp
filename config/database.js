const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnection = () => {
    mongoose.connect(process.env.DATABSE_URL)
        .then(() => {
            console.log("Dtabse conneted successfully");

        })
        .catch((err) => {
            console.log("Dtabse connection failled");

        })
}