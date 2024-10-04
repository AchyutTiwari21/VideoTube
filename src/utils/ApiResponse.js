class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode,
        this.data = data,
        this.message = message,
        this.seccess = statusCode < 400
    }
}