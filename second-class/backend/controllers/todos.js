// @Descripton Read All Todos Records
// @Route /api/todos
const read = (request, response) => {
    response.send("Get All Todos").status(200);
};
// @Descripton Read By Id Todos Records
// @Route /api/todos/:id
const readById = (request, response) => {
    response.send("Get Todos By Id").status(200);
};
// @Descripton Create New Todos Records
// @Route /api/todos/
const create = (request, response) => {
    response.send("Post New Todos").status(200);
};
// @Descripton Update Existing Todos Records
// @Route /api/todos/:id
const update = (request, response) => {
    response.send("Update Existing Todos").status(200);
};
// @Descripton Delete Existing Todos Records
// @Route /api/todos/:id
const remove = (request, response) => {
    response.send("Delete Existing Todos").status(200);
};

module.exports = { read, readById, create, update, remove };