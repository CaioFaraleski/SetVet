let card = document.querySelectorAll(".card-service");
let addProduct = document.querySelector(".add-service");
let exit = document.querySelector(".exit");
let wind = document.querySelector(".hidden");


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
    });
});

card.forEach(function (div) {
    div.children[0].addEventListener("mouseout", function(event) {
        div.children[0].style.width = "12.5rem";
        div.children[0].style.height = "12.5rem";
        div.children[0].style.backgroundColor = "#b7b7b7";
        div.children[0].style.fontSize = "1.2rem";
        div.children[0].style.alignItems = "center";
        div.children[0].style.padding = "0 2";
        div.children[0].querySelector("figure").style.width = "3rem";
        div.children[0].querySelector("figure").style.marginLeft = "0";
        div.children[0].querySelector(".hdn").style.display = "none";
    });
});

addProduct.addEventListener("click", function() {
    wind.style.display = "block";
});

exit.children[0].addEventListener("click", function() {
    wind.style.display = "none";
});