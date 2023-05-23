// Import Student Model
const course_model = require("../models/course");
// @Description : Get All Courses
// @Route Get : /api/courses
// @Access : public
const readAll = async (request, response) => {
    try {
        const course_data = await course_model.find();
        response.status(200).send({
            status: 200,
            message: "All Courses Get Successfully",
            data: course_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Get Course By Id
// @Route Get : /api/courses/:id
// @Access : public
const readById = async (request, response) => {
    try {
        const id = request.params.id;
        if(!id){
            response.status(404);
            throw new Error("Course Not Found");
        }
        const course_data = await course_model.findById(id);
        response.status(200).send({
            status: 200,
            message: `Course Get By Id : ${id}  Successfully`,
            data: course_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Create New Course
// @Route Get : /api/courses
// @Access : public
const create = async (request, response) => {
    try {
        // Destructure Request
        const { name, duration, fees } = request.body;
        if (!name || !duration || !fees) {
            response.status(400);
            throw new Error("All Fields are Mandatory");
        }
        const course_create = await course_model.create({
            name,
            duration,
            fees
        });
        response.status(201).send({
            status: 201,
            message: "New Course Created Successfully",
            data: null
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Update Course By Id
// @Route Get : /api/courses/:id
// @Access : public
const update = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Course Record Updated By Id : ${request.params.id} Successfully`,
        data: null
    });
};
// @Description : Delete Course By Id
// @Route Get : /api/courses/:id
// @Access : public
const remove = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Course Deleted Id : ${request.params.id} Successfully`,
        data: null
    });
};

module.exports = { readAll, readById, create, update, remove };