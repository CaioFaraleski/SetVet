leftArrow = document.querySelector(".left-arr");
rightArrow = document.querySelector(".right-arr");

leftArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) - 1;
    year.innerText = yearNumber;
});

rightArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) + 1;
    year.innerText = yearNumber;
});