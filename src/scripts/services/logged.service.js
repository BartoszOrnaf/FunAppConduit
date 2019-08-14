import { getData } from '../services';

export function appendUserThumbnail() {

    if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != "null") {
        getData("https://conduit.productionready.io/api/user")
            .then((data) => {
                currentUser = data;

                let currentUser;
                let userThumbnail = $('<img/>', {
                    class: "user-image-small",
                    src: currentUser.user.image
                });
                let userName = $('<a/>', {
                    text:` ${ currentUser.user.username }`,
                    class: "menu-navigation"
                });

                
                $("#userNameAndThumbnail")
                    .append(userThumbnail)
                    .append(userName);
            });

    };


};

