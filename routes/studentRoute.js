const express = require('express');
const multer = require('multer');
const { getAllStudent, createStudent, storeStudent, showStudent, editStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const path = require('path');

//multer setup
const studentStorage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/student/'));
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const studentMulter = multer({
    storage : studentStorage 
}).single('student_photo');

// create a router
const router = express.Router();

// routes
router.get('/', getAllStudent);
router.get('/create', createStudent);
router.post('/create', studentMulter, storeStudent);
router.get('/show/:id', showStudent);
router.get('/edit/:id', editStudent);
router.post('/update/:id', studentMulter, updateStudent);
router.get('/delete/:id', deleteStudent);


// module exports 
module.exports = router;