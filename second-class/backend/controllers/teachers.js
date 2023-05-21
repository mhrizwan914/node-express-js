// @Descripton Read All Teachers Records
// @Route /api/teachers
const read = (request, response) => {
    response.send("Get All Teachers").status(200);
};
// @Descripton Read By Id Teachers Records
// @Route /api/teachers/:id
const readById = (request, response) => {
    response.send("Get Teachers By Id").status(200);
};
// @Descripton Create New Teachers Records
// @Route /api/teachers/
const create = (request, response) => {
    response.send("Post New Teachers").status(200);
};
// @Descripton Update Existing Teachers Records
// @Route /api/teachers/:id
const update = (request, response) => {
    response.send("Update Existing Teachers").status(200);
};
// @Descripton Delete Existing Teachers Records
// @Route /api/teachers/:id
const remove = (request, response) => {
    response.send("Delete Existing Teachers").status(200);
};

module.exports = { read, readById, create, update, remove };