const obj = {
    status: null,
    message: "",
    data: null
}

const setGeneralResponse = (status, message, data) => {
    obj.status = status;
    obj.message = message;
    obj.data = data;
    return obj;
}

module.exports = setGeneralResponse;