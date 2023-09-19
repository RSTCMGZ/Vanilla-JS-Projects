const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const span = document.querySelector(".color")

btn.addEventListener("click", () => {
    const randomColor = colors[getRandomColor()]
    document.body.style.backgroundColor = randomColor
    span.textContent = randomColor
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}