const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const student = require('../models/student');

// get all student
const getAllStudent = async (req, res) => {

    const students = await student.find();
    res.render('student/index', {students});
}

// create student form
const createStudent = (req, res) => {
    res.render('student/create');
}

// create student & store student data
const storeStudent = async (req, res) => {

    const studentData = {
        ...req.body,
        photo : req.file ? req.file.filename : 'avatar.jpg'
    }
    await student.create(studentData);


    res.redirect('/student');
}

// show single student
const showStudent = async (req, res) => {
  
    const singleStudent = await student.findById(req.params.id);

     res.render('student/show', {singleStudent});
}

// edit student form
const editStudent = async (req, res) => {

    const editData = await student.findById(req.params.id);

    res.render('student/edit', {editData});
}

// update student data
const updateStudent = async (req, res) =>{

    const updateData = {
        ...req.body,
        photo : req.file ? req.file.filename : 'avatar.jpg'
    }

    await student.findByIdAndUpdate(req.params.id, updateData);

     res.redirect('/student');

}

// delete student
const deleteStudent = async (req, res) => {

    await student.findByIdAndDelete(req.params.id);

    res.redirect('/student');
}

// module exports
module.exports = {
    getAllStudent, 
    createStudent,
    storeStudent,
    showStudent,
    editStudent,
    updateStudent,
    deleteStudent
}