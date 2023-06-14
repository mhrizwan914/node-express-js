const obj = {
    title: null,
    status: null,
    message: "",
    trace: null,
    data: null
}

const setErrorResponse = (title, status, message, trace, data) => {
    obj.title = title;
    obj.status = status;
    obj.message = message;
    obj.trace = trace;
    obj.data = data;
    return obj;
}

module.exports = setErrorResponse;