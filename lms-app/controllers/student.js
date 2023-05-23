// @Description : Get All Students
// @Route Get : /api/students
// @Access : public
const readAll = (request, response) => {
    response.status(200).send({
        status: 200,
        message: "All Students Get Successfully",
        data: null
    });
};
// @Description : Get Student By Id
// @Route Get : /api/students/:id
// @Access : public
const readById = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Student Get By Id : ${request.params.id}  Successfully`,
        data: null
    });
};
// @Description : Create New Student
// @Route Get : /api/students
// @Access : public
const create = (request, response) => {
    // Destructure Request
    const { fName, lName, email, phone, password } = request.body;
    if (!fName || !email || !phone || !password) {
        response.status(400);
        throw new Error("All Fields are Mandatory Except Last Name");
    }
    response.status(201).send({
        status: 201,
        message: "New Student Created Successfully",
        data: null
    });
};
// @Description : Update Student By Id
// @Route Get : /api/students/:id
// @Access : public
const update = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Student Record Updated By Id : ${request.params.id} Successfully`,
        data: null
    });
};
// @Description : Delete Student By Id
// @Route Get : /api/students/:id
// @Access : public
const remove = (request, response) => {
    response.status(200).send({
        status: 200,
        message: `Student Deleted Id : ${request.params.id} Successfully`,
        data: null
    });
};

module.exports = { readAll, readById, create, update, remove };