class RouteError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

function errorHandler(error, req, res, next) {
    const { message, statusCode } = error;
    console.error(error, ":", statusCode);
    return res.status(statusCode).json({ error: message });
}

export { RouteError as default, errorHandler };
