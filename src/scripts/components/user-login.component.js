import { postData } from '../services';

export function userLogin() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;
    let payload = { "user": { "email": email, "password": password } };
    sessionStorage.setItem('token', "null");
    postData("https://conduit.productionready.io/api/users/login", payload);
    alert('Welcome: ' + email );
};

