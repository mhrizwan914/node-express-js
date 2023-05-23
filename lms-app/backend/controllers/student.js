// Import Student Model
const student_model = require("../models/student");
// @Description : Get All Students
// @Route Get : /api/students
// @Access : public
const readAll = async (request, response) => {
    try {
        const student_data = await student_model.find();
        response.status(200).send({
            status: 200,
            message: "All Students Get Successfully",
            data: student_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Get Student By Id
// @Route Get : /api/students/:id
// @Access : public
const readById = async (request, response) => {
    try {
        const id = request.params.id;
        if(!id){
            response.status(404);
            throw new Error("Student Not Found");
        }
        const student_data = await student_model.findById(id);
        response.status(200).send({
            status: 200,
            message: `Student Get By Id : ${id} Successfully`,
            data: student_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Create New Student
// @Route Get : /api/students
// @Access : public
const create = async (request, response) => {
    try {
        // Destructure Request
        const { fName, lName, email, phone, password } = request.body;
        if (!fName || !email || !phone || !password) {
            response.status(400);
            throw new Error("All Fields are Mandatory Except Last Name");
        }
        const student_create = await student_model.create({
            fName,
            lName,
            email,
            phone,
            password
        });
        response.status(201).send({
            status: 201,
            message: "New Student Created Successfully",
            data: null
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Update Student By Id
// @Route Get : /api/students/:id
// @Access : public
const update = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Student Record Updated By Id : ${request.params.id} Successfully`,
        data: null
    });
};
// @Description : Delete Student By Id
// @Route Get : /api/students/:id
// @Access : public
const remove = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Student Deleted Id : ${request.params.id} Successfully`,
        data: null
    });
};

module.exports = { readAll, readById, create, update, remove };