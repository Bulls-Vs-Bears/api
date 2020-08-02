export function responseMessage(type, success, data, token){
    let message = "Data registered successfully";
    if (success == true){
        switch(type){
            case 'get':
                message = 'Data found';
                break;
            case 'put':
                message = 'Data updated successfully';
                break;
            case 'delete':
                message = 'Data deleted successfully';
                break;
        }
    } else {
        message = "Invalid Data";
    }
    const response = {
        success: success, 
        message: message, 
        data: data,
        token: token 
    }
    return response;
}