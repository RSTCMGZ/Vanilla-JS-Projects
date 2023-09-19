let count = 0;


const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
const h1 = document.querySelector("h1")

btns.forEach(function (btn) {
    value.style.color = "black"
    h1.style.color = "black"

    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--
        } else if (styles.contains("increase")) {
            count++
        } else {
            count = 0
        }
        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }
        value.textContent = count;
    })
})