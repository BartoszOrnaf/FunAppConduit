import { getData, postData } from '../services';

export function renderComponent(httpMethod, btnText, url, payload) {
    
    if (httpMethod == 'get') {
        return $('<button/>', {
            text: btnText,
            click: () => getData(url)
        });
    };
    if (httpMethod == 'post') {
        return $('<button/>', {
            text: btnText,
            click: () => postData(url, payload)
        });
    };
}

