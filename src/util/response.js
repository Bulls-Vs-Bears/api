export function responseMessage(type, outcome, data, token){
    let message = "User registered successfully";
    const response = {
        success: outcome, 
        message: message, 
        data: data,
        token: token 
    }
    return response;
}