export function getAuthorizationHeader() {
    const username = process.env.USER_NAME
    const token = process.env.AUTH_TOKEN
    return Buffer.from(`${username}:${token}`).toString('base64');
} 
