const secretNum = Math.floor(Math.random() * 100) + 1;

let attempt = Number(
    document.getElementById("attempts-left").textContent
);

const submitbutton = document.getElementById("submit-guess");

submitbutton.addEventListener("click", () => {

    attempt--;

    document.getElementById("attempts-left").textContent = attempt;

    const guess = document.getElementById("guess-input").value;
    const num = Number(guess);

    if (num < secretNum) {
        alert("too low");

    } else if (num > secretNum) {
        alert("too high");

    } else {
        alert("yahooo, your guess is correct");
    }

});

