displayLoading("block");
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
let moreOrLess;
let edit;
let remove;
let names = false;
let cod = false;
let quant = false;
let value = false;
let orderBySelected = localStorage.getItem("orderBy") ? localStorage.getItem("orderBy") : "name";

ifLoged(redirectTo);

firebase.database().ref('users').child(localStorage.getItem("uid")).child('produtos').orderByChild(orderBySelected).on('value', function (dataSnapshot) {
    displayLoading("none");
    fillProductList(dataSnapshot);
    bestSoldAndTotal(dataSnapshot);
})

function fillProductList (dataSnapshot) {
    tableItems.innerText = "";
    let name;
    let price;
    let data;
    let nAmount;
    let tAmount;
    let array = [];
    dataSnapshot.forEach(function(item) {
        let divItem = document.createElement("div");
        let divId = document.createElement("div");
        let divName = document.createElement("div");
        let divDate = document.createElement("div");
        let divPrice = document.createElement("div");
        let divAmount = document.createElement("div");
        let figMore = document.createElement("figure");
        let imgMore = document.createElement("img");
        let figEdit = document.createElement("figure");
        let imgEdit = document.createElement("img");
        let figDelete = document.createElement("figure");
        let imgDelete = document.createElement("img");
        let amountContent = `<span>${item.val().nowAmount}/</span>${item.val().totalAmount}`;
        divItem.classList.add("item", "w-100", "ps-4", "py-2");
        tableItems.appendChild(divItem);
        divItem.appendChild(divId);
        divId.classList.add("cod", "ps-2");
        divId.innerText = item.key
        divItem.appendChild(divName);
        divName.classList.add("product", "ps-3");
        divName.innerText = item.val().name
        name = item.val().name;
        divItem.appendChild(divDate);
        divDate.classList.add("date", "ps-4");
        divDate.innerText = item.val().data
        data = item.val().data;
        divItem.appendChild(divPrice);
        divPrice.classList.add("price", "ps-4");
        divPrice.innerText = `R$${item.val().price}`
        price = item.val().price;
        nAmount = item.val().nowAmount;
        tAmount = item.val().totalAmount;
        seller = item.val().seller;
        timestamp = item.val().timestamp;
        divItem.appendChild(divAmount);
        divAmount.classList.add("amount", "ps-4");
        divAmount.innerHTML = amountContent;
        divItem.appendChild(figMore);
        figMore.appendChild(imgMore);
        imgMore.classList.add("w-100", "h-100", "moreOrLessImg");
        imgMore.setAttribute("src", "assets/img/inventory/more-or-less.png");
        divItem.appendChild(figEdit);
        figEdit.appendChild(imgEdit);
        imgEdit.classList.add("w-100", "h-100", "editImg");
        imgEdit.setAttribute("src", "assets/img/inventory/edit.png");
        divItem.appendChild(figDelete);
        figDelete.appendChild(imgDelete);
        imgDelete.classList.add("w-100", "h-100", "deleteImg");
        imgDelete.setAttribute("src", "assets/img/inventory/delete-item.png");
        array += [`//{"key": "${item.key}", "item": {"name": "${name}", "data": "${data}", "price": "${price}", "nowAmount": "${nAmount}", "totalAmount": "${tAmount}", "seller": "${seller}", "timestamp": "${timestamp}"}}`];
    });
    moreOrLess = document.querySelectorAll(".moreOrLessImg");
    moreOrLess.forEach(function (item) {
        item.addEventListener("click", function (event) {
            let pai = event.target.parentNode.parentNode;
            windEdit.style.display = "none";
            wind.style.display = "none";
            windMore.style.display = "block";
            arrowOrderBy.children[1].style.display = "none";
            arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
            windMore.querySelector(".hidden-cod").value = `${pai.children[0].innerText}^^${array}`;
            withBlur();
        });
    })
    edit = document.querySelectorAll(".editImg");
    edit.forEach(function (item) {
        item.addEventListener("click", function (event) {
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
            windEdit.querySelector("#date").value = `${items[2]}`;
            windEdit.querySelector("#val").value = `${items[3]}`;
            windEdit.querySelector("#quant").value = `${items[4]}`;
            withBlur();
        })
    })
    remove = document.querySelectorAll(".deleteImg");
    remove.forEach(function (item) {
        item.addEventListener('click', function (event) {
            document.querySelector(".areYouSure").setAttribute("id" , event.target.parentNode.parentNode.children[0].innerText);
            document.querySelector(".areYouSure").style.display = "flex";
            withBlur();
        });
    });
}

document.querySelector(".cancel").addEventListener('click', function (event) {
    event.target.parentNode.id = "";
    event.target.parentNode.style.display = "none";
    withoutBlur();
});

document.querySelector(".yes").addEventListener('click', function (event) {
    displayLoading("block")
    deleteItem(event.target.parentNode.id);
    event.target.parentNode.id = "";
    event.target.parentNode.style.display = "none";
    withoutBlur();
});


function deleteItem (item) {
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).child(item).remove().then(function () {
        displayLoading("none");
    });
}

function addRemove () {
    let keys = windMore.querySelector(".hidden-cod").value;
    let funcs = keys.split("^^");
    let array = [];
    let obj = [];
    keys = funcs[0];
    array = funcs[1].split("//");
    array.splice(0, 1);
    for (let i = 0; i < array.length; i++) {
        obj.push(JSON.parse(array[i]))
    }
    
    if(label.children[0].checked) {
        let data;
        let numn;
        let numt;
        for(let i=0; i<obj.length; i++) {
            if(obj[i].key === keys) {
                numn = Number(obj[i].item.nowAmount) + Number(quantMoreOrLess.value);
                numt = Number(obj[i].item.totalAmount);
                if(numn > numt) {
                    numt = numn
                }
                data = {
                    name: obj[i].item.name,
                    data: obj[i].item.data,
                    price: Number(obj[i].item.price),
                    nowAmount: Number(numn),
                    totalAmount: Number(numt),
                    seller: Number(obj[i].item.seller),
                    timestamp: Number(obj[i].item.timestamp),
                    nameToLowerCase: obj[i].item.name.toLowerCase()
                }
            }
        }
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).child(keys).update(data).then(function() {
            quantMoreOrLess.value = "";
            windMore.style.display = "none";
            withoutBlur();
            displayLoading("none");
        });
    }
    else {
        let data;
        for(let i=0; i < obj.length; i++) {
            if(obj[i].key === keys) {
                data = {
                    name: obj[i].item.name,
                    data: obj[i].item.data,
                    price: Number(obj[i].item.price),
                    nowAmount: Number(obj[i].item.nowAmount) - Number(quantMoreOrLess.value),
                    totalAmount: Number(obj[i].item.totalAmount),
                    seller: Number(obj[i].item.seller) + Number(quantMoreOrLess.value),
                    timestamp: Number(obj[i].item.timestamp),
                    nameToLowerCase: obj[i].item.name.toLowerCase()
                }
            }
        }
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).child(keys).update(data).then(function() {
            quantMoreOrLess.value = "";
            windMore.style.display = "none";
            withoutBlur();
            displayLoading("none");
        });
    }
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

function bestSoldAndTotal (table) {
    let soldList = [];
    let maior = 0;
    let nomeMaior;
    let soma = 0;
    table.forEach(function (item) {
        soldList.push({num: item.val().seller, name: item.val().name});
    });
    
    for (let i = 0; i < soldList.length; i++) {
        soma += soldList[i].num;
        if ( soldList[i].num > maior ) {
            maior = soldList[i].num;
            nomeMaior = soldList[i].name
        }
    }
    
    bestSeller.children[0].innerText = nomeMaior;
    totalProducts.children[0].innerText = soldList.length;
    soldItems.children[0].innerText = soma;
    
}

function update () {
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos/${(document.querySelector("#cod").value)}`).once("value").then(function (dataSnapshot) {
        let separate = document.querySelector("#quant").value;
        let val = document.querySelector("#val").value;
        val = val.replace("R", "");
        val = val.replace("$", "");
        separate = separate.split("/");
        let data = {
            name: document.querySelector("#name").value,
            data: document.querySelector("#date").value,
            price: Number(val),
            nowAmount: Number(separate[0]),
            totalAmount: Number(separate[1]),
            timestamp: dataSnapshot.val().timestamp,
            seller: dataSnapshot.val().seller,
            nameToLowerCase: document.querySelector("#name").value.toLowerCase()
        }
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos/${(document.querySelector("#cod").value)}`).update(data).then(function () {
            document.querySelector("#cod").value = "";
            document.querySelector("#name").value = "";
            document.querySelector("#date").value = "";
            document.querySelector("#val").value = "";
            document.querySelector("#quant").value = "";
            document.querySelector(".hidden-edits").style.display = "none";
            withoutBlur();
            displayLoading("none");
        });
    })
}

function products () {
    document.querySelector(".products").querySelector("span").innerText = `${document.querySelectorAll(".item").length}`;
}

orderByName.addEventListener('click', function (event) {
    displayLoading("block");
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("name").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
        displayLoading("none");
    });
    localStorage.setItem("orderBy", "name");
    arrowOrderBy.children[1].style.display = "none";
    arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

orderByDate.addEventListener('click', function (event) {
    displayLoading("block");
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("timestamp").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
        displayLoading("none");
    });
    localStorage.setItem("orderBy", "timestamp");
    arrowOrderBy.children[1].style.display = "none";
    arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

orderByPrice.addEventListener('click', function (event) {
    displayLoading("block");
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("price").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
        displayLoading("none");
    });
    localStorage.setItem("orderBy", "price");
    arrowOrderBy.children[1].style.display = "none";
    arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

orderByAmount.addEventListener('click', function (event) {
    displayLoading("block");
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("nowAmount").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
        displayLoading("none");
    });
    localStorage.setItem("orderBy", "nowAmount");
    arrowOrderBy.children[1].style.display = "none";
    arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

searchInventory.addEventListener('keyup', function (event) {
    displayLoading("block");
    if (searchInventory.value !== "") {
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("nameToLowerCase").startAt(searchInventory.value.toLowerCase()).endAt(searchInventory.value.toLowerCase() + '\uf8ff').once("value").then(function (dataSnapshot) {
            fillProductList(dataSnapshot);
            displayLoading("none");
        })
    }
    else {
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).once("value").then(function (dataSnapshot) {
            fillProductList(dataSnapshot);
            displayLoading("none");
        })
    }
})

moreOrLessSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    displayLoading("block");
    addRemove();
})

att.addEventListener('click', function (event) {
    event.preventDefault();
    displayLoading("block");
    update();
})

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

addProduct.querySelector("button").addEventListener("click", function() {
    wind.style.display = "block";
    windEdit.style.display = "none";
    arrowOrderBy.children[1].style.display = "none";
    arrowOrderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    withBlur();
});

exit.children[0].addEventListener("click", function() {
    wind.style.display = "none";
    withoutBlur();
});

exitMore.children[0].addEventListener("click", function() {
    windMore.style.display = "none";
    withoutBlur();
});

exitEdit.children[0].addEventListener("click", function() {
    windEdit.style.display = "none";
    withoutBlur();
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

addSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (addName.value !== "" && addPrice.value !== "" && addAmount.value !== "") {
        let now = new Date();
        console.log(now)
        let infos = {
            name: `${addName.value[0].toUpperCase()}${addName.value.slice(1)}`,
            data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
            timestamp: now.getTime(),
            price: Number(addPrice.value),
            totalAmount: Number(addAmount.value),
            nowAmount: Number(addAmount.value),
            seller: 0,
            nameToLowerCase: addName.value.toLowerCase()
        }

        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).push(infos).then(function () {
            addName.value = "";
            addPrice.value = "";
            addAmount.value = "";
            addHidden.style.display = "none";
            withoutBlur();
        }).catch(function (error) {
            console.log(error)
        })
    }
})