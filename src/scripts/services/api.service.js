// KROK 1: Dodaj header foo: bar do KAŻDEGO zapytania
// KROK 3: Dodaj header Authorization: Token {{token}}
// KROK 2: Zaimplementuj funkcję postData

// URL: https://conduit.productionready.io/api/users/login
// PAYLOAD: {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}

// User: mpawluk+conduit@cybervadis.com
// Pass: cybervadis

export function getData(url) {
    let h = new Headers();
    h.append('foo', 'bar');

    if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != "null") {
        h.append('Authorization', `Token ${sessionStorage.getItem('token')}`);
    };

    let req = new Request(url, {
        method: 'GET',
        headers: h
    });
    return fetch(req).then(data => data.json());
}

export function postData(url, payload) {
    let h = new Headers();
    h.append('foo', 'bar');
    h.append('Content-Type', 'application/json');

    if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != "null") {
        h.append('Authorization', `Token ${sessionStorage.getItem('token')}`);
    };

    let req = new Request(url, {
        method: 'POST',
        headers: h,
        body: JSON.stringify(payload)
    });
    return fetch(req).then(data => data.json()).then(function (data) {
        sessionStorage.setItem('token', data.user.token);
    });
}

const ApiService = {
    getData: getData,
    postData: postData,
};

export default ApiService;