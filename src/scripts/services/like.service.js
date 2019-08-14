
export function checkIfLoggedIn(slug){
    if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != "null"){

        function postLike(url) {
            let h = new Headers();
            h.append('Content-Type', 'application/json');
        
            if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != "null") {
                h.append('Authorization', `Token ${sessionStorage.getItem('token')}`);
            };
        
            let req = new Request(url, {
                method: 'POST',
                headers: h
            });
            
            return fetch(req);
           
        }
        postLike(`https://conduit.productionready.io/api/articles/${slug}/favorite`);
        location.reload();
    }else{
        alert('Log in to like the article!');
    };
 }