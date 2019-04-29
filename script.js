
//this function formats the response to be in proper html format
function postJoke(response) {
    return '<p id="joke" class="joke">' + response.data.value.joke + '</p>';
};

//this function formats the error in proper html
function postError(error) {
    return '<p id="joke" class="joke">' + error + '</p>';
}

//This function will be called in index.html
function getJoke() {
    //first get element
    let jokeElement = document.getElementById("columnheader2");
    jokeElement.innerHTML = "";

    //Call in formating functions in axios object. Axios is called using CDN in index.html
    axios.get('https://api.icndb.com/jokes/random?')
    .then(response => {
        jokeElement.innerHTML = postJoke(response);
    })
    .catch(error => {
        jokeElement.innerHTML = postError(error);
    });
}