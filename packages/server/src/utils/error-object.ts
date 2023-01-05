export interface ErrorObject {
    error: {
        message: string;
        code?: number;
    };
}

export function mountErrorObject(errMessage: string): ErrorObject {
    return {
        error: {
            message: errMessage,
        },
    };
}
