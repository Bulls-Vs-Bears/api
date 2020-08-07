export function createSuccessfulResponse(type, data, token){
    let message;
    const success = true;

    switch(type){
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

export function createFailedResponse(message, error){
    const success = false;

    const response = { success, message, error };
    return response;
}
