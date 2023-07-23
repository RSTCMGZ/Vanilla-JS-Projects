const rightArrow = document.querySelectorAll(".right-arrow")
const leftArrow = document.querySelectorAll(".left-arrow")
const movieLists = document.querySelectorAll(".movie-list")


rightArrow.forEach((arrow, i) => {
    let clickCounter = 0;
    arrow.addEventListener("click", function () {
        clickCounter++;
        movieLists[i].style.transform =
            `
        translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value + 300}px)
        `;
    });
});

leftArrow.forEach((arrow, i) => {
    let clickCounter = 0;
    arrow.addEventListener("click", function () {
        clickCounter++;
        movieLists[i].style.transform =
            `
        translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)
        `;
    });
});