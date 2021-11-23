let orderItem = document.querySelector(".order-list");
let arrowOrderBy = document.querySelector(".orderby");
let addProduct = document.querySelector(".left-infos");
let exit = document.querySelector(".exit")
let wind = document.querySelector(".hidden"); 
let names = false;
let cod = false;
let quant = false;
let value = false;

addProduct.addEventListener("click", function() {
    wind.style.display = "block";
});

exit.children[0].addEventListener("click", function() {
    wind.style.display = "none";
});

orderItem.addEventListener("click", function(event) {
    let item = event.target.innerText;
    if(item === "Nome") {
        names = true;
        cod = false;
        quant = false;
        value = false;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "http://127.0.0.1:5500/assets/img/inventory/down-arrow.png";
    }
    else if(item === "Código") {
        names = false;
        cod = true;
        quant = false;
        value = false;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "http://127.0.0.1:5500/assets/img/inventory/down-arrow.png";
    }
    else if(item === "Quantidade") {
        names = false;
        cod = false;
        quant = true;
        value = false;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "http://127.0.0.1:5500/assets/img/inventory/down-arrow.png";
    }
    else if(item === "Valor") {
        names = false;
        cod = false;
        quant = false;
        value = true;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "http://127.0.0.1:5500/assets/img/inventory/down-arrow.png";
    }
});


arrowOrderBy.children[0].addEventListener('click', function () {
    if(arrowOrderBy.children[0].children[1].children[0].src === "http://127.0.0.1:5500/assets/img/inventory/down-arrow.png") {
        arrowOrderBy.children[0].children[1].children[0].src = "http://127.0.0.1:5500/assets/img/inventory/up-arrow.png";
        arrowOrderBy.children[1].style.display = "flex";
    }
    else if(arrowOrderBy.children[0].children[1].children[0].src === "http://127.0.0.1:5500/assets/img/inventory/up-arrow.png") {
        arrowOrderBy.children[0].children[1].children[0].src = "http://127.0.0.1:5500/assets/img/inventory/down-arrow.png";
        arrowOrderBy.children[1].style.display = "none";
    }
})
