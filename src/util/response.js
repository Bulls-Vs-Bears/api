export function createSuccessfulResponse(type, data, token){
    let message;
    const success = true;

    switch(type.toLowerCase()){
        case 'post':
            message = 'Data created successfully';
            break;
        case 'get':
            message = 'Data found successfully';
            break;
        case 'put':
            message = 'Data updated successfully';
            break;
        default:
            message = 'Data deleted successfully';
            break;
    }
    const response = { success, message, data, token };
    return response;
}

export function createFailedResponse(message, errorCode){
    const success = false;
    const data = {};

    const response = { success, message, errorCode, data };
    return response;
}
