// const Response = class {
//     constructor(status, data) {
//         this.status = status;
//         this.data = data;
//         this.message = message
//     }
// }
function Response(status, data, message) {
    this.status = status;
    this.data = data;
    this.message = message;
}
module.exports = { Response };