// @Description : Get All Institutes
// @Route Get : /api/institutes
// @Access : public
const readAll = (request, response) => {
    response.status(200).send({
        status: 200,
        message: "All Institutes Get Successfully",
        data: null
    });
};
// @Description : Get Institute By Id
// @Route Get : /api/institutes/:id
// @Access : public
const readById = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Institute Get By Id : ${request.params.id}  Successfully`,
        data: null
    });
};
// @Description : Create New Institute
// @Route Get : /api/institutes
// @Access : public
const create = (request, response) => {
    response.status(201).send({
        status: 201,
        message: "New Institute Created Successfully",
        data: null
    });
};
// @Description : Update Institute By Id
// @Route Get : /api/institutes/:id
// @Access : public
const update = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Institute Record Updated By Id : ${request.params.id} Successfully`,
        data: null
    });
};
// @Description : Delete Institute By Id
// @Route Get : /api/institutes/:id
// @Access : public
const remove = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Institute Deleted Id : ${request.params.id} Successfully`,
        data: null
    });
};

module.exports = { readAll, readById, create, update, remove };