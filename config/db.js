const mongoose = require('mongoose');
const colors = require('colors');

// mongoDB Connection
const mongoDBConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongo_URL);
        console.log(`MongoDB Connected Successfully.`.bgCyan.black);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
}

// module exports
module.exports = mongoDBConnection;