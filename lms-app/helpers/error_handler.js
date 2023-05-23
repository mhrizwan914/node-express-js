const error_handler_obj = {
    status: null,
    title: null,
    message: null,
    stack: null
};

const set_error_handler_obj = (status, title, message, stack) => {
    error_handler_obj.status = status;
    error_handler_obj.title = title;
    error_handler_obj.message = message;
    error_handler_obj.stack = stack;
    return error_handler_obj;
};

module.exports = set_error_handler_obj;