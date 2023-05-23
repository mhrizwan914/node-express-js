// @Description : Get All Teachers
// @Route Get : /api/teachers
// @Access : public
const readAll = (request, response) => {
    response.status(200).send({
        status: 200,
        message: "All Teachers Get Successfully",
        data: null
    });
};
// @Description : Get Teacher By Id
// @Route Get : /api/teachers/:id
// @Access : public
const readById = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Teacher Get By Id : ${request.params.id}  Successfully`,
        data: null
    });
};
// @Description : Create New Teacher
// @Route Get : /api/teachers
// @Access : public
const create = (request, response) => {
    response.status(201).send({
        status: 201,
        message: "New Teacher Created Successfully",
        data: null
    });
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