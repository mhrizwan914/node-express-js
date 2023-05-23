// Import Student Model
const institute_model = require("../models/institute");
// @Description : Get All Institutes
// @Route Get : /api/institutes
// @Access : public
const readAll = async (request, response) => {
    try {
        const institute_data = await institute_model.find();
        response.status(200).send({
            status: 200,
            message: "All Institutes Get Successfully",
            data: institute_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Get Institute By Id
// @Route Get : /api/institutes/:id
// @Access : public
const readById = async (request, response) => {
    try {
        const id = request.params.id;
        if(!id){
            response.status(404);
            throw new Error("Institute Not Found");
        }
        const institute_data = await institute_model.findById(id);
        response.status(200).send({
            status: 200,
            message: `Institute Get By Id : ${id}  Successfully`,
            data: institute_data
        });
    } catch (error) {
        console.log(error);
    }
};
// @Description : Create New Institute
// @Route Get : /api/institutes
// @Access : public
const create = async (request, response) => {
    try {
        // Destructure Request
        const { name, address, contact } = request.body;
        if (!name || !address || !contact) {
            response.status(400);
            throw new Error("All Fields are Mandatory");
        }
        const institute_create = await institute_model.create({
            name,
            address,
            contact
        });
        response.status(201).send({
            status: 201,
            message: "New Institute Created Successfully",
            data: null
        });
    } catch (error) {
        console.log(error);
    }
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