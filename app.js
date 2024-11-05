let joke = document.getElementById("joke");
let changeBtn = document.getElementById("btn");
let spinner = document.getElementById("spinner");
let url = "https://v2.jokeapi.dev/joke/Programming?type=single";

function getJoke() {
    joke.classList.add("hidden-text");   // Hide joke text
    spinner.classList.add("show-spinner"); // Show spinner

    fetch(url)
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                joke.textContent = data.joke || data.jokes[0].joke;
                joke.classList.remove("hidden-text"); // Show joke text
                spinner.classList.remove("show-spinner"); // Hide spinner
            }, 500); // Delay to show spinner briefly
        })
        .catch(error => {
            joke.textContent = "Oops! Something went wrong. Please try again!";
            joke.classList.remove("hidden-text"); // Show error message
            spinner.classList.remove("show-spinner"); // Hide spinner in case of error
            console.error("Error fetching joke:", error);
        });
}

changeBtn.addEventListener("click", getJoke);
getJoke();
