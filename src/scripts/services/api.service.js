
export function getData(url) {
    // KROK 1: Dodaj header foo: bar do KAŻDEGO zapytania

    return  fetch(url).then(data => data.json());

    // KROK 3: Dodaj header Authorization: Token {{token}}

}


let token = null;

export function postData(url, payload) {
    // KROK 2: Zaimplementuj funkcję postData

        // URL: https://conduit.productionready.io/api/users/login
        // PAYLOAD: {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}

        // User: mpawluk+conduit@cybervadis.com
        // Pass: cybervadis

    console.log('POST: ', url);
}

const ApiService = {
    getData: getData, 
    postData: postData, 
};

 export default ApiService;