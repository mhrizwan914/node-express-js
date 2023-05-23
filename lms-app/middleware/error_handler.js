// Import Constants
const constants = require("../constants");
// Import Error Handler Helper
const error_handler_helper = require("../helpers/error_handler");

const error_handler = (error, request, response, next) => {
    const status = response.statusCode ? response.statusCode : 500;
    switch (status) {
        case constants.VALIDATION_ERROR:
            response.send(error_handler_helper(status, "Validation Error", error.message, error.stack));
            break;
        case constants.UNATHORIZED:
            response.send(error_handler_helper(status, "Unathorize Error", error.message, error.stack));
            break;
        case constants.FORBIDDEN:
            response.send(error_handler_helper(status, "Forbidden Error", error.message, error.stack));
            break;
        case constants.NOT_FOUND:
            response.send(error_handler_helper(status, "Not Found Error", error.message, error.stack));
            break;
        case constants.SERVER_ERROR:
            response.send(error_handler_helper(status, "Server Error", error.message, error.stack));
            break;
        default:
            console.log("No Error Found, All Goods");
    }
};

module.exports = error_handler;