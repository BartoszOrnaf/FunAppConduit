import '../styles/index.scss';

let tags = {};

// $(document).ready(function () {
//     $.ajax({
//         url: "https://conduit.productionready.io/api/tags",
//         dataType: "json"
//     })
//         .done(function (data) {
//             tags = data;
//             printTags();
//             console.log(tags);
//         });
// });

fetch("https://conduit.productionready.io/api/tags")
    .then(function (data) {
        return data.json();
    })
    .then(function (data) {
        return JSON.stringify(data);
    })
    .then(function (data) {
        tags = JSON.parse(data);
        printTags();
    }).catch(function(){
        alert('Wrong URL');
    });

function printTags() {
    let htmlContentTags = '';
    if (tags) {
        for (let i = 0; i < tags.tags.length; i++) {
            htmlContentTags = htmlContentTags + `<button type="button" class="btn btn-secondary btn-sm">${tags.tags[i]}</button> `;
        };
        $('.tabsClass').html(function () {
            return `<div>Popular tags: <br>${htmlContentTags}</div>`;
        });
    }
}


