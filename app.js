let joke = document.getElementById("joke");
let changeBtn = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"

let getJoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        joke.textContent = `${data.jokes[0].joke}`;
    }).catch(
        error => {
            console.log(Error(`${error}`))
        }
    )
}

changeBtn.addEventListener("click" , getJoke)
getJoke();