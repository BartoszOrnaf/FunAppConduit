import { postData } from '../services';

export function userLogin() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;
    let payload = { "user": { "email": email, "password": password } };
    sessionStorage.setItem('token', "null");
    function loginError() {
        let errMessage = $('<ul>', {
            class: "login-error"
        }).append($('<li>', {
            text: "email or password is invalid"
        }));
        $("#userLoginError").prepend(errMessage);
    };

    function deleteLoginMessage() {
        $(".login-error").remove();
    }

   
    postData("https://conduit.productionready.io/api/users/login", payload)
        .then(() => { 
            window.location = "./logged.html"; 
         })
        .catch(() => {
            deleteLoginMessage();
            loginError();
        });

};

