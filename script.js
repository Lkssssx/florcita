const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const h1 = document.getElementById("h1")
const comments = document.getElementById("comments")

const quotes = ["dale q si >:c", "ya me haces poner triste ;c", "ya me enoje otra ve >;C", "acaso ya no me quere?", "vas a casarte conmigo quieras o no uwu"]
let counter = 0

yesBtn.addEventListener("click", () => {
    window.location.href = "yes_page.html";
});

noBtn.addEventListener("click", () => {
    counter += 1
    if (counter >= 5) {
        h1.hidden = true;
    }
    const currentWidth = parseInt(window.getComputedStyle(yesBtn).width);
    const currentHeight = parseInt(window.getComputedStyle(yesBtn).height)
    const currentFontSize = parseInt(window.getComputedStyle(yesBtn).fontSize)
    yesBtn.style.width = (currentWidth * 1.8) + 'px';
    yesBtn.style.height = (currentHeight * 1.8) + 'px';
    yesBtn.style.fontSize = (currentFontSize * 1.8) + 'px';
    comments.hidden = false
    comments.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
});
