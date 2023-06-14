const setErrorResponse = require("../helpers/errorResponse");

const errorHandler = (error, request, response, next) => {
    const status = response.statusCode ? response.statusCode : 500;
    switch (status) {
        case 400:
            response.json(setErrorResponse("Validation Error", status, error.message, error.stack));
            break;
        case 401:
            response.json(setErrorResponse("Authentication Error", status, error.message, error.stack));
            break;
        case 403:
            response.json(setErrorResponse("Forbidden Error", status, error.message, error.stack));
            break;
        case 404:
            response.json(setErrorResponse("Not Found Error", status, error.message, error.stack));
            break;
        case 500:
            response.json(setErrorResponse("Server Error", status, error.message, error.stack));
            break;
        default:
            response.json(setErrorResponse("All Good", 200, null, null));
            break;
    }
}

module.exports = errorHandler;