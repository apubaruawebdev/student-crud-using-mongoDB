const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const pageLayouts =  require('express-ejs-layouts');
const studentRoute = require('./routes/studentRoute');
const mongoDBConnection = require('./config/db');
const studentTest = require('./controllers/mongoTest');

// environment variable
const PORT = process.env.PORT || 8080;

// init express
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// ejs support
app.set('view engine', 'ejs');
app.use(pageLayouts);
app.set('layout', 'layouts/app');

// static folder
app.use(express.static('public'));

// routes
app.use('/student', studentRoute);

studentTest();

// server listen
app.listen(PORT, () => {
    mongoDBConnection();
    console.log(`Server Running on Port ${ PORT }`.bgGreen.black);
})