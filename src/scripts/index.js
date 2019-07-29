import '../styles/index.scss';

let tags = {};
let articles = {};

function getData(url) {
    return new Promise((resolve, reject) => {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = () => {
            if (httpReq.readyState === 4) {
                if (httpReq.status === 200) {
                    resolve(JSON.parse(httpReq.responseText));
                } else {
                    reject(new Error(httpReq.statusText));
                }
            }
        };
        httpReq.open("GET", url, true);
        httpReq.send();
    });
}

getData("https://conduit.productionready.io/api/articles").then(function (data) {
    articles = data;
    printArticles(articles, '#articles');
});

getData("https://conduit.productionready.io/api/tags").then(function (data) {
    tags = data;
    printTags(tags, '.tabs-class');
});

function printTags(input, selector) {
    let htmlContentTags = '';
    if (input) {
        for (let i = 0; i < input.tags.length; i++) {
            htmlContentTags = htmlContentTags + `<button type="button" class="btn btn-secondary btn-sm">${input.tags[i]}</button> `;
        };
        $(selector).html(function () {
            return `<div>Popular tags: <br>${htmlContentTags}</div>`;
        });
    }
};

function printArticles(input, selector) {
    if (input) {
        $(selector).append(
            createHtml()
        );
    };
};

function createHtml() {
    let htmlResult = $('<div></div>');

    articles.articles.forEach(articleObj => {
        htmlResult.append(createArticleHTMLPartial(articleObj));
    });

    return htmlResult;
};

function createArticleHTMLPartial(articleObj) {
    let articleHTML = $('<div></div>');

    let userThumbnail = $('<img/>', {
        class: "user-image",
        src: articleObj.author.image
    });
    let userName = $(`<p>${articleObj.author.username}</p>`).addClass("user-name");
    let shortDate = articleObj.createdAt.slice(0, 10);
    let postedOn = $(`<p>${shortDate}</p>`).addClass("posted-on");
    let favoritesCount = articleObj.favoritesCount;
    let articleTitle = $(`<h1>${articleObj.title}</h1>`);
    let articleDescription = $(`<p>${articleObj.description}</p>`);
    let readMore = $('<a/>', {
        text: "Read more..."
    }).prop("href", `https://demo.realworld.io/#/article/${articleObj.slug}`);

    articleHTML.append(
        '<hr>'
    ).append(
        $('<div/>', {
            class: 'feed-container'
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

    return articleHTML;
};

