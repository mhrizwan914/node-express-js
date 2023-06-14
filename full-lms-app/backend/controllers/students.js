const setGeneralResponse = require("../helpers/generalResponse");
const asyncHandler = require("express-async-handler");
const Students = require("../models/students");
// @Description Get All Students
// @Route Get /api/students
// @Access Public
const read = asyncHandler(async (request, response) => {
    try {
        const data = await Students.find();
        if (!data) {
            response.status(400).json(setGeneralResponse(400, "Opps! No Record Found", null));
        } else {
            response.status(200).json(setGeneralResponse(200, "All Students Get Successfully", data));
        }
    } catch (error) {
        console.log(error);
    }
});
// @Description Get Student By ID
// @Route Get /api/students/:id
// @Access Public
const readById = asyncHandler(async (request, response) => {
    try {
        const id = request.params.id;
        const data = await Students.findById(id);
        if (!data) {
            response.status(400).json(setGeneralResponse(400, "Opps! No Record Found", null));
        } else {
            response.status(200).json(setGeneralResponse(200, `Student Get Successfully By ID : ${id}`, data));
        }
    } catch (error) {
        console.log(error);
    }
});
// @Description Create Student
// @Route Post /api/students/
// @Access Public
const create = asyncHandler(async (request, response) => {
    const { fname, lname, email, phone, password } = request.body;
    if (!fname || !email || !phone || !password) {
        response.status(400);
        throw new Error("All Fields Are Mandatory Except Last Name");
    } else {
        try {
            const isExist = await Students.findOne({ email });
            if (!isExist) {
                let studentObject = { fname, lname, email, phone, password };
                let newStudent = new Students(studentObject);
                await newStudent.save();
                if (!newStudent) {
                    response.status(500);
                    throw new Error("Try Again! We Have Interel Server Error");
                } else {
                    response.status(201).json(setGeneralResponse(201, "New Students Created Successfully"));
                }
            } else {
                response.status(400).json(setGeneralResponse(400, "Email or Phone Already Exist"));
            }
        } catch (error) {
            console.log(error);;
        }
    }
});
// @Description Update Student By ID
// @Route Put /api/students/:id
// @Access Public
const update = asyncHandler(async (request, response) => {
    const id = request.params.id;
    const data = await Students.findById(id);
    if (!data) {
        response.send(404);
        throw new Error("Data Not Found");
    } else {
        try {
            const update = await Students.findByIdAndUpdate(id, request.body, { new: true });
            response.status(200).json(setGeneralResponse(200, `Student Updated Successfully By ID : ${id}`, update));
        } catch (error) {
            console.log(error);
        }
    }
});
// @Description Delete Student By ID
// @Route Delete /api/students/:id
// @Access Public
const remove = asyncHandler(async (request, response) => {
    const id = request.params.id;
    const data = await Students.findById(id);
    if (!data) {
        response.send(404);
        throw new Error("Data Not Found");
    } else {
        try {
            const remove = await Students.findByIdAndDelete(id);
            response.status(200).json(setGeneralResponse(200, `Student Deleted Successfully By ID : ${id}`, null));
        } catch (error) {
            console.log(error);
        }
    }
});
// @Description Delete Student By ID
// @Route Delete /api/students/:id
// @Access Public
const searchWithPagination = asyncHandler(async (request, response) => {
    const { pageNo, pageSize, searchEntity, searchValue } = request.body;
    try {
        const result = await Students.find({ [searchEntity]: searchValue }).skip((pageNo - 1) * pageSize).limit(pageSize);
        if (!result) {
            response.status(200).json(setGeneralResponse(404, 'Search Result Not Found', null));
        } else {
            response.status(200).json(setGeneralResponse(200, 'Student Found Successfully', result));
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = { read, readById, create, update, remove, searchWithPagination };