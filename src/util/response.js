export function responseMessage(type, success, data, token){
    let message = "Invalid Data";
    if (success == true){
        switch(type){
            case 'post':
                message = "Data created successfully";
                break;
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
    }
    const response = {
        success: success, 
        message: message, 
        data: data,
        token: token 
    }
    return response;
}