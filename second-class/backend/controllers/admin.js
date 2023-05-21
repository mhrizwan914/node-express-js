// @Descripton Read All Admin Records
// @Route /api/admin
const read = (request, response) => {
    response.send("Get All Admin").status(200);
};
// @Descripton Read By Id Admin Records
// @Route /api/admin/:id
const readById = (request, response) => {
    response.send("Get Admin By Id").status(200);
};
// @Descripton Create New Admin Records
// @Route /api/admin/
const create = (request, response) => {
    response.send("Post New Admin").status(200);
};
// @Descripton Update Existing Admin Records
// @Route /api/admin/:id
const update = (request, response) => {
    response.send("Update Existing Admin").status(200);
};
// @Descripton Delete Existing Admin Records
// @Route /api/admin/:id
const remove = (request, response) => {
    response.send("Delete Existing Admin").status(200);
};

module.exports = { read, readById, create, update, remove };