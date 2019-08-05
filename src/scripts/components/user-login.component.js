import { postData as apiPostData } from '../services';


export function renderComponent(btnText, url, payload) {
    return $('<button/>', {
        text: btnText,
        click: () => postData(url,EMAIL, PASSWORD)
    });
}

function postData(url, EMAIL, PASSWORD) {
    let payload = {'user': {'email': EMAIL, 'password': PASSWORD }};
    apiPostData(url, payload);
}