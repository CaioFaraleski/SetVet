let orderItem = document.querySelector(".order-list");
let arrowOrderBy = document.querySelector(".orderby");
let addProduct = document.querySelector(".left-infos");
let exit = document.querySelector(".exit");
let exitEdit = document.querySelector(".exit-edits");
let wind = document.querySelector(".hidden");
let windEdit = document.querySelector(".hidden-edits");
let edits = document.querySelectorAll(".item");
let names = false;
let cod = false;
let quant = false;
let value = false;


edits.forEach(function (item) {
    item.children[5].children[0].addEventListener("click", function(event) {
        let pai = event.target.parentNode.parentNode;
        let items = [];
        for (let i = 0; i < 5; i++) {
            items[i] = `${pai.children[i].innerText}`;  
        }
        windEdit.style.display = "block";
        wind.style.display = "none";
        windEdit.querySelector("#cod").value = `${items[0]}`;
        windEdit.querySelector("#name").value = `${items[1]}`;
        windEdit.querySelector("#date").value = `${items[2]}`;
        windEdit.querySelector("#val").value = `${items[3]}`;
        windEdit.querySelector("#quant").value = `${items[4]}`;
        
    
        // editProduct.style.display = "block";
    });
});

exitEdit.children[0].addEventListener("click", function() {
    windEdit.style.display = "none";
});

addProduct.addEventListener("click", function() {
    wind.style.display = "block";
    windEdit.style.display = "none";
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
})
