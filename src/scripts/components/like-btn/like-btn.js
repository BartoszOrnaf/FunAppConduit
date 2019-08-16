import { isLoggedIn, postData } from '../../services';

const likesUrl = (slug) => `https://conduit.productionready.io/api/articles/${slug}/favorite`;

export function renderLikeButton(favCount, slug) {
    return $('<button/>', {
        type: "button",
        class: "btn btn-outline-success",
        text: `❤ ${favCount}`
    }).click(function () {
        if (isLoggedIn()) {
            postData(likesUrl(slug)).then(() => {
                location.reload();
            });
        } else {
            alert('Log in to like the article!');
        }
    });
}
