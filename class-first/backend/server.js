// console.log("This is First Class of Node JS");

const fs = require("fs");

// Read Directory Method

fs.readdir("./", (error, dir) => {
    // console.log(dir);
});

// Read File Method

fs.readFile("./About.txt", "utf-8", (error, file) => {
    // console.log(file);
});

// Write New File Method

fs.writeFile("./Welcome.txt", "This is a Welcome Text File", (error, file) => {
    // if(error){
    //     console.log(error);
    // }else{
    //     console.log(file);
    // }
});

// Append Text in File Method

fs.appendFile("./About.txt", "New Text is Added", (error) => {
    // if (error) {
    //     console.log(error);
    // } else {
    //     console.log("Append Successfully");
    // }
});

// Create New Server

// const http = require("http");

// let persons = [
//     {
//         id: 1,
//         name: "Ahmed",
//         age: 20
//     },
//     {
//         id: 2,
//         name: "Kashif",
//         age: 15
//     },
//     {
//         id: 3,
//         name: "Bilal",
//         age: 14
//     }
// ];

// const server = http.createServer((request, response) => {
//     console.log("Server is Starting");
//     if (request.url == "/persons") {
//         if(request.method == "GET"){
//             response.write(JSON.stringify(persons));
//         }else if(request.method == "POST"){
//             response.write(JSON.stringify(request.body));
//         }
//     }
//     response.end();
// });

// server.listen(3000);

// Express JS Start

require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

const personsRoutes = require("./Routes/Persons");

app.use(cors());

app.use("/api/persons", personsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is Running Port = ${process.env.PORT}`);
});