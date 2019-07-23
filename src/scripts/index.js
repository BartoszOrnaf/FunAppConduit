import '../styles/index.scss';

let tags = {};
let articles = {};

// $(document).ready(function () {
//     $.ajax({
//         url: "https://conduit.productionready.io/api/tags",
//         dataType: "json"
//     })
//         .done(function (data) {
//             tags = data;
//             printTags();//           
//         });
// });

fetch("https://conduit.productionready.io/api/articles")
    .then(function (data) {
        return data.json();
    })
    .then(function (data) {
        return JSON.stringify(data);
    })
    .then(function (data) {
        articles = JSON.parse(data);
        printArticles();
    }).catch(function () {
        alert('Loading articles problem');
    });

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
    }).catch(function () {
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

function printArticles() {
    if (articles) {
        $('#articles').append(
            createHtml()
        );
    }
}

function createHtml() {
    let htmlResult = $('<div></div>');

    articles.articles.forEach(element => {
        let userThumbnail = $('<img/>', {
            class: "userImage",
            src: element.author.image
        });
        let userName = $(`<p>${element.author.username}</p>`).addClass("userName");
        let shortDate = element.createdAt.slice(0, 10);
        let postedOn = $(`<p>${shortDate}</p>`).addClass("postedOn");
        let favoritesCount = element.favoritesCount;
        let articleTitle = $(`<h1>${element.title}</h1>`);
        let articleDescription = $(`<p>${element.description}</p>`);
        let readMore = $('<a/>', {
            text: "Read more..."
        }).prop("href", `https://demo.realworld.io/#/article/${element.slug}`);

        htmlResult.append(
            '<hr>'
        ).append(
            $('<div/>', {
                class: 'feedContainer'
            }).append(
                $('<div/>').append(
                    userThumbnail
                )).append(
                    $('<div/>').append(
                        userName
                    ).append(
                        postedOn
                    )).append(
                        $('<div/>', {
                            style: "text-align:right"
                        }).append(
                            $('<button/>', {
                                type: "button",
                                class: "btn btn-outline-success",
                                text: `❤ ${favoritesCount}`
                            }).click(function () {
                                alert('Adding likes is not working jet!');
                            })
                        )
                    )
        ).append(
            $('<br>')
        ).append(
            articleTitle
        ).append(
            articleDescription
        ).append(
            $(`<span></span>`).append(
                readMore
            )
        );
    });

    return htmlResult;
}

