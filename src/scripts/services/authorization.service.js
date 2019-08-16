
export function isLoggedIn() {
    return sessionStorage.getItem('token') && sessionStorage.getItem('token') !== "null";
}
export function appendAuthHeader(headersObj) {
    headersObj.append('Authorization', `Token ${sessionStorage.getItem('token')}`);
    return headersObj;
}

export function saveToken(tokenVal) {
    sessionStorage.setItem('token', tokenVal);
    window.location = "./logged.html"; 
}

const AuthorizationService = {
    isLoggedIn: isLoggedIn,
    appendAuthHeader: appendAuthHeader,
    saveToken: saveToken,
};


export default AuthorizationService;