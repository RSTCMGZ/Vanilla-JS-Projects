// const btns = document.querySelectorAll(".question-btn")
// const closeBtn = document.querySelector(".minus-icon")
// const question = document.querySelector(".question-text")

// btns.forEach(function (btn) {
//     btn.addEventListener("click", (e) => {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })
// })

//! 2. yol

const questions = document.querySelectorAll(".question")

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })

})