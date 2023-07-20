//! global variables

const container = document.querySelector(".container")
const clickBtn = document.querySelector(".click-btn")
const color = document.querySelector(".color")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, "A", "B", "C", "D", "E", "F"]

clickBtn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * hex.length)
        hexColor += hex[randNum];

    }
    color.textContent = hexColor
    container.style.background = hexColor
})