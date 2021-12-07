let orderItem = document.querySelector(".order-list");
let arrowOrderBy = document.querySelector(".orderby");
let addProduct = document.querySelector(".left-infos");
let exit = document.querySelector(".exit");
let exitEdit = document.querySelector(".exit-edits");
let exitMore = document.querySelector(".exit-more")
let wind = document.querySelector(".hidden");
let windEdit = document.querySelector(".hidden-edits");
let windMore = document.querySelector(".hidden-moreorless");
let edits = document.querySelectorAll(".item");
let label = document.querySelector(".switch");
let names = false;
let cod = false;
let quant = false;
let value = false;

function filterSpan (span) {
    span.slice(3,9);
}

label.addEventListener("click", function() {
    if(label.children[0].checked) {
        label.parentNode.children[0].innerText = "Adicionar";
        label.parentNode.children[0].style.color = "green";
    }
    else {
        label.parentNode.children[0].innerText = "Remover";
        label.parentNode.children[0].style.color = "red";
    }
});


edits.forEach(function (item) {
    item.children[6].children[0].addEventListener("click", function(event) {
        let pai = event.target.parentNode.parentNode;
        let items = [];
        for (let i = 0; i < 5; i++) {
            items[i] = `${pai.children[i].innerText}`;  
        }
        windMore.style.display = "none";
        wind.style.display = "none";
        windEdit.style.display = "block";
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
        windEdit.querySelector("#cod").value = `${items[0]}`;
        windEdit.querySelector("#name").value = `${items[1]}`;
        windEdit.querySelector("#val").value = `${span(items[3])}`;
        windEdit.querySelector("#quant").value = `${items[4]}`;
        windEdit.querySelector("#cod").style.display = "none";
        windEdit.querySelector(".cod").style.display = "none";
    });
});

edits.forEach(function (item) {
    item.children[5].children[0].addEventListener("click", function(event) {
        let pai = event.target.parentNode.parentNode;
        let items = [];
        for (let i = 0; i < 5; i++) {
            items[i] = `${pai.children[i].innerText}`;  
        }
        windEdit.style.display = "none";
        wind.style.display = "none";
        windMore.style.display = "block";
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
        windMore.querySelector(".hidden-cod").value = `${items[0]}`;
    });
});

exitMore.children[0].addEventListener("click", function() {
    windMore.style.display = "none";
});

exitEdit.children[0].addEventListener("click", function() {
    windEdit.style.display = "none";
});

addProduct.querySelector("button").addEventListener("click", function() {
    wind.style.display = "block";
    windEdit.style.display = "none";
    arrowOrderBy.children[1].style.display = "none";
    arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
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
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    }
    else if(item === "Código") {
        names = false;
        cod = true;
        quant = false;
        value = false;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    }
    else if(item === "Quantidade") {
        names = false;
        cod = false;
        quant = true;
        value = false;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    }
    else if(item === "Valor") {
        names = false;
        cod = false;
        quant = false;
        value = true;
        arrowOrderBy.children[1].style.display = "none";
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    }
});


arrowOrderBy.children[0].addEventListener('click', function () {
    if(arrowOrderBy.children[0].children[1].children[0].src === "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png") {
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/up-arrow.png";
        arrowOrderBy.children[1].style.display = "flex";
    }
    else if(arrowOrderBy.children[0].children[1].children[0].src === "https://caiofaraleski.github.io/SetVet/assets/img/inventory/up-arrow.png") {
        arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
        arrowOrderBy.children[1].style.display = "none";
    }
});


function products () {
    document.querySelector(".products").querySelector("span").innerText = `${document.querySelectorAll(".item").length}`;
}

function sell () {
    let totalnumber = 0;
    for (let i = 0; i < document.querySelectorAll(".item").length; i++) {
        let array = document.querySelectorAll(".item")[i].querySelector(".amount").innerText.split("/");
        let now = Number(array[0]);
        let total = Number(array[1]);

        totalnumber += total - now;
        
    }
    document.querySelector(".sold").children[0].innerText = `${totalnumber}`;
    
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function bestSeller () {
    let totalnumber = [];
    for (let i = 0; i < document.querySelectorAll(".item").length; i++) {
        let array = document.querySelectorAll(".item")[i].querySelector(".amount").innerText.split("/");
        let now = Number(array[0]);
        let total = Number(array[1]);

        totalnumber.push(total - now);
        
    }
    let num = getMaxOfArray(totalnumber);
    let prodName = document.querySelectorAll(".item")[totalnumber.indexOf(num)].querySelector(".product").innerText;
    document.querySelector(".best-seller").querySelector("span").innerText = `${prodName}`;
    
}

bestSeller();
sell();
products();