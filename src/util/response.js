export function responseMessage(type, outcome, data){
    let message = "User registered successfully";
    const response = {
        success: outcome, 
        message: message, 
        data: data 
        // token: {} 
    }
    return response;
}