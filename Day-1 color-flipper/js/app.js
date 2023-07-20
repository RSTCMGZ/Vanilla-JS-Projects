const container = document.querySelector(".container")
const clickBtn = document.querySelector(".click-btn")
const color = document.querySelector(".color")
const colors = [
    "orange",
    "green",
    "yellow",
    "lightblue",
    "#f5ff8",
    "rgba(122,233,234)",
    "maroon",
    "gray",
];

clickBtn.addEventListener("click", () => {
    let randNum = Math.floor(Math.random() * colors.length);
    container.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
})