// KROK 1: Dodaj header foo: bar do KAŻDEGO zapytania
// KROK 3: Dodaj header Authorization: Token {{token}}
// KROK 2: Zaimplementuj funkcję postData

        // URL: https://conduit.productionready.io/api/users/login
        // PAYLOAD: {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}

        // User: mpawluk+conduit@cybervadis.com
        // Pass: cybervadis

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE3MDQsInVzZXJuYW1lIjoidmFkaXMiLCJleHAiOjE1NzAxNzg5MjZ9.8QBeGODYXbgVOPCA6qlb_OmwRWOGeqidIxmi93xHvAw';


export function getData(url) {
    let h = new Headers();
    
    h.append('foo', 'bar');
    if (token!=null){
        h.append('Authorization', `Token ${token}`);
    }
    
    let req =  new Request(url, {
        method: 'GET',
        headers: h
    });
    return  fetch(req).then(data => data.json());

}

export function postData(url, payload) {
    let h = new Headers();
    h.append(payload);
    
    let req =  new Request(url, {
        method: 'POST', //It works, but in Request Method it shows GET... 
        headers: h
    });
    return  fetch(req).then(data => data.json());
}

const ApiService = {
    getData: getData, 
    postData: postData, 
};

 export default ApiService;