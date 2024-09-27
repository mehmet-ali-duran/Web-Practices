function createURL(url, id) {
    if (id === null) return url;
    return `${url}?postId=${id}`;
}

function getComments(url, id) {
    let newURL = createURL(url, id);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    });

    xhr.open("GET", newURL);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments", 1);
