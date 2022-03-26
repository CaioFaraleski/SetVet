let card = document.querySelectorAll(".card-service");
let addProduct = document.querySelector(".add-service");
let exit = document.querySelector(".exit");
let wind = document.querySelector(".hidden");
let divInput = document.querySelector(".input");
let imgs = document.querySelectorAll(".img");

ifLoged(redirectTo);

divInput.addEventListener("click", function () {
    if (document.querySelector(".down").children[0].src === "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png") {
        document.querySelector(".imgs").style.display = "grid";
        document.querySelector(".down").children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/up-arrow.png"
    }
    else if (document.querySelector(".down").children[0].src === "https://caiofaraleski.github.io/SetVet/assets/img/inventory/up-arrow.png") {
        document.querySelector(".imgs").style.display = "none"
        document.querySelector(".down").children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png"
    }
});

imgs.forEach(function (img) {
    img.addEventListener("click", function(event) {
        let src = img.src;
        console.log(img)
        document.querySelector(".hdn").value = src;
        document.querySelector(".default").src = src;
    });
});

card.forEach(function (div) {
    div.children[0].addEventListener("mouseover", function(event) {
        div.children[0].style.width = "100%";
        div.children[0].style.height = "100%";
        div.children[0].style.backgroundColor = "#24c46f";
        div.children[0].style.fontSize = "1.6rem";
        div.children[0].style.alignItems = "start";
        div.children[0].style.padding = "0.5rem 2rem 0 2rem";
        div.children[0].querySelector("figure").style.width = "4rem";
        div.children[0].querySelector("figure").style.marginLeft = "5rem";
        div.children[0].querySelector(".hdn").style.display = "block";
        div.children[0].children[0].style.display = "flex";
    });
});

card.forEach(function (div) {
    div.children[0].addEventListener("mouseout", function(event) {
        div.children[0].style.width = "12.5rem";
        div.children[0].style.height = "12.5rem";
        div.children[0].style.backgroundColor = "#939393";
        div.children[0].style.fontSize = "1.2rem";
        div.children[0].style.alignItems = "center";
        div.children[0].style.padding = "0 2";
        div.children[0].querySelector("figure").style.width = "3rem";
        div.children[0].querySelector("figure").style.marginLeft = "0";
        div.children[0].querySelector(".hdn").style.display = "none";
        div.children[0].children[0].style.display = "none";
    });
});

addProduct.addEventListener("click", function() {
    wind.style.display = "block";
});

exit.children[0].addEventListener("click", function() {
    wind.style.display = "none";
});

document.querySelectorAll(".removeService").forEach(function (item) {
    item.addEventListener('click', function (event) {
        console.log("x paiiiiiiiiiiiiiii")
    });
})
