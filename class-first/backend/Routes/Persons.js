const express = require("express");

const route = express.Router();

let persons = [
    {
        id: 1,
        name: "Ahmed",
        age: 20
    },
    {
        id: 2,
        name: "Kashif",
        age: 15
    },
    {
        id: 3,
        name: "Bilal",
        age: 14
    }
];

route.get("/", (request, response) => {
    response.send(JSON.stringify(persons)).status(200);
});

route.get("/:id", (request, response) => {
    let newId = request.params.id;

    let checkId = persons.findIndex((index) => index.id == newId);

    if (checkId > -1) {
        response.send(persons[checkId]).status(200);
    } else {
        response.send("Data Not Found on Specific ID").status(404);
    }
});

route.post("/", (request, response) => {
    // let { name, age } = request.body;

    // let error = [];

    // if (!name && !age) {
    //     error.push("Fields Are Mandatory");
    // }

    // if (error.length > 0) {
    //     response.send(error).send(400);
    //     return;
    // } else {
    //     let newPersons = {
    //         id: persons.length + 1,
    //         name: name,
    //         age: age
    //     }
    //     persons.push(newPersons);
    //     response.send(request.body).send(200);
    // }
    response.send(request.body);
});

route.put("/:id", (request, response) => {
    let newId = request.params.id;

    let { name, age } = request.body;

    let checkId = persons.findIndex((index) => index.id == newId);

    if (checkId > -1) {
        persons[checkId].name = name;
        persons[checkId].age = age;

        response.send(persons[checkId]).status(200);
    } else {
        response.send("Data Not Found on Specific ID").status(404);
    }
});

route.delete("/:id", (request, response) => {
    let newId = request.params.id;

    let { name, age } = request.body;

    let checkId = persons.findIndex((index) => index.id == newId);

    if (checkId > -1) {
        persons.splice(checkId, 1);
        response.send({
            message: "Data Delete Successfully",
            data: persons
        }).status(200);
    } else {
        response.send("Data Not Found on Specific ID").status(404);
    }
});

module.exports = route;