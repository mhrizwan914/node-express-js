// Import Student Model
const teacher_model = require("../models/teacher");
// @Description : Get All Teachers
// @Route Get : /api/teachers
// @Access : public
const readAll = async (request, response) => {
    try {
        const teacher_data = await teacher_model.find();
        response.status(200).send({
            status: 200,
            message: "All Teachers Get Successfully",
            data: teacher_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Get Teacher By Id
// @Route Get : /api/teachers/:id
// @Access : public
const readById = async (request, response) => {
    try {
        const id = request.params.id;
        if(!id){
            response.status(404);
            throw new Error("Teacher Not Found");
        }
        const teacher_data = await teacher_model.findById(id);
        response.status(200).send({
            status: 200,
            message: `Teacher Get By Id : ${id} Successfully`,
            data: teacher_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Create New Teacher
// @Route Get : /api/teachers
// @Access : public
const create = async (request, response) => {
    try {
        // Destructure Request
        const { name, course, contact } = request.body;
        if (!name || !course || !contact) {
            response.status(400);
            throw new Error("All Fields are Mandatory");
        }
        const teacher_create = await teacher_model.create({
            name,
            course,
            contact
        });
        response.status(201).send({
            status: 201,
            message: "New Teacher Created Successfully",
            data: null
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Update Teacher By Id
// @Route Get : /api/teachers/:id
// @Access : public
const update = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Teacher Record Updated By Id : ${request.params.id} Successfully`,
        data: null
    });
};
// @Description : Delete Teacher By Id
// @Route Get : /api/teachers/:id
// @Access : public
const remove = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Teacher Deleted Id : ${request.params.id} Successfully`,
        data: null
    });
};

module.exports = { readAll, readById, create, update, remove };