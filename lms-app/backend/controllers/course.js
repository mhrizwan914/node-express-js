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
        if (!id) {
            response.status(404);
            throw new Error("Course Not Found");
        }
        const course_data = await course_model.findById(id);
        response.status(200).send({
            status: 200,
            message: `Course Get By Id : ${id} Successfully`,
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
const update = async (request, response) => {
    try {
        const id = request.params.id;
        if (!id) {
            response.status(400);
            throw new Error("Id Must Be Required in URL");
        } else {
            const course_update = await course_model.findByIdAndUpdate(id, request.body, { new: true });
            response.status(200).send({
                status: 200,
                message: `Course Updated By Id : ${id}  Successfully`,
                data: course_update
            });
        }
    } catch (error) {
        console.log(error);
    }
};
// @Description : Delete Course By Id
// @Route Get : /api/courses/:id
// @Access : public
const remove = async (request, response) => {
    try {
        const id = request.params.id;
        if (!id) {
            response.status(400);
            throw new Error("Id Must Be Required in URL");
        } else {
            const course_deleted = await course_model.findByIdAndRemove(id);
            response.status(200).send({
                status: 200,
                message: `Course Deleted By Id : ${id}  Successfully`,
                data: null
            });
        }
    } catch (error) {
        console.log(error);
    }
};
// @Description : Search Course By Entity
// @Route Get : /api/courses/search
// @Access : public
const search = async (request, response) => {
    try {
        const { duration } = request.body;
        if (!duration) {
            response.status(404);
            throw new Error("Search Entity is Required");
        } else {
            const course_data = await course_model.find({ duration: duration });
            response.status(200).send({
                status: 200,
                message: "All Courses Search Successfully",
                data: course_data
            });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { readAll, readById, create, update, remove, search };