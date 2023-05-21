const studentsModel = require("../models/students");
const {helperResponse} = require("../helpers/response");
// @Descripton Read All Students Records
// @Route /api/students
const read = async (request, response) => {
    try {
        const results = await studentsModel.find();
        if(!results){
            // response.status(404).send({
            //     status: 404,
            //     data: null,
            //     message: "Data Not Found"
            // });
            response.status(404).send(helperResponse(404, null, "Data Not Found"));
        }else{
            // response.status(200).send({
            //     status: 200,
            //     data: results,
            //     message: "Data Found Successfully"
            // });
            response.status(200).send(helperResponse(200, results, "Data Found Successfully"));
        }
    } catch (error) {
        console.log(error);
        // response.status(400).send({
        //     status: 400,
        //     data: null,
        //     message: "Internal Server Error"
        // });
        response.status(400).send(helperResponse(400, null, "Internal Server Error"));
    }
};
// @Descripton Read By Id Students Records
// @Route /api/students/:id
const readById = async (request, response) => {
    try {
        const id = request.params.id;
        const results = await studentsModel.findById(id);
        if(!results){
            response.status(404).send({
                status: 404,
                data: null,
                message: "Data Not Found"
            });
        }else{
            response.status(200).send({
                status: 200,
                data: results,
                message: "Data Found Successfully"
            });
        }
    } catch (error) {
        console.log(error);
        response.status(400).send({
            status: 400,
            data: null,
            message: "Internal Server Error"
        });
    }
};
// @Descripton Create New Students Records
// @Route /api/students/
const create = async (request, response) => {
    try {
        const {fName, lName, contact, course} = request.body;
        if(!fName || !contact || !course){
            response.status(400).send({
                status: 400,
                message: "All Fields are Mandatory Except Last Name"
            });
            return;
        }
        const newStudent = await studentsModel({
            fName,
            lName,
            contact,
            course
        }).save();
        response.status(201).send({
            status: 201,
            message: "Data Created Successfully"
        });
    } catch (error) {
        console.log(error);
        response.status(404).send({
            status: 404,
            message: "Internal Server Error"
        })
    }
};
// @Descripton Update Existing Students Records
// @Route /api/students/:id
const update = async (request, response) => {
    try {
        const id = request.params.id;
        const {fName, lName, contact, course} = request.body;
        if(!fName || !lName || !contact || !course){
            response.status(400).send({
                status: 400,
                message: "Update At Least One Field"
            });
            return;
        }else{
            const updateStudent = await studentsModel.findByIdAndUpdate(id, request.body);
            if(!updateStudent){
                response.status(404).send({
                    status: 404,
                    message: "Data Not Found"
                });
                return;
            }else{
                response.status(200).send({
                    status: 200,
                    message: "Data Updated Succefully"
                });
            }
        }
    } catch (error) {
        console.log(error);
        response.status(404).send({
            status: 404,
            message: "Internal Server Error"
        });
    }
};
// @Descripton Delete Existing Students Records
// @Route /api/students/:id
const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const updateStudent = await studentsModel.findByIdAndRemove(id);
        if(!updateStudent){
            response.status(404).send({
                status: 404,
                message: "Data Not Found"
            });
            return;
        }else{
            response.status(200).send({
                status: 200,
                message: "Data Deleted Succefully"
            });
        }
    } catch (error) {
        console.log(error);
        response.status(404).send({
            status: 404,
            message: "Internal Server Error"
        });
    }
};

module.exports = { read, readById, create, update, remove };