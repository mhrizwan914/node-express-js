// @Description : Get All Courses
// @Route Get : /api/courses
// @Access : public
const readAll = (request, response) => {
    response.status(200).send({
        status: 200,
        message: "All Courses Get Successfully",
        data: null
    });
};
// @Description : Get Course By Id
// @Route Get : /api/courses/:id
// @Access : public
const readById = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Course Get By Id : ${request.params.id}  Successfully`,
        data: null
    });
};
// @Description : Create New Course
// @Route Get : /api/courses
// @Access : public
const create = (request, response) => {
    console.log("Body is:", request.body);
    response.status(201).send({
        status: 201,
        message: "New Course Created Successfully",
        data: null
    });
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