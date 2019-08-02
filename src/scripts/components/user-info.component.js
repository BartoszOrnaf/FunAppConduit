import { getData as apiGetData } from '../services';

export function renderComponent(btnText, url) {
    return $('<button/>', {
        text: btnText,
        click: () => getData(url)
    });
}

function getData(url) {
    apiGetData(url);
}