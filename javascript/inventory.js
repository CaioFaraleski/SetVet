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
    fillProductList(dataSnapshot);
    bestSeller();
    sell();
    products();
});

function fillProductList (dataSnapshot) {
    console.log(dataSnapshot)
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
            windEdit.querySelector("#cod").style.display = "none";
            windEdit.querySelector(".cod").style.display = "none";
        })
    })
    remove = document.querySelectorAll(".deleteImg");
    remove.forEach(function (item) {
        item.addEventListener('click', function (event) {
            deleteItem(event.target.parentNode.parentNode)
        })
    })
}


function deleteItem (item) {
    let id = item.children[0].innerText;
    firebase.database().ref("users").child(localStorage.getItem("uid")).child("produtos").child(id).remove().then(function () {
        console.log("hahahahahahahahahahahahaahahazhahahahahaha puta")
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
                    timestamp: Number(obj[i].item.timestamp)
                }
            }
        }
        firebase.database().ref('users').child(localStorage.getItem('uid')).child('produtos').child(keys).update(data).then(function() {
            quantMoreOrLess.value = "";
            windMore.style.display = "none";
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
                    seller: Number(obj[i].item.seller),
                    timestamp: Number(obj[i].item.timestamp)
                }
            }
        }
        firebase.database().ref('users').child(localStorage.getItem('uid')).child('produtos').child(keys).update(data).then(function() {
            quantMoreOrLess.value = "";
            windMore.style.display = "none";
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
            seller: dataSnapshot.val().seller
        }
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos/${(document.querySelector("#cod").value)}`).update(data).then(function () {
            document.querySelector("#cod").value = "";
            document.querySelector("#name").value = "";
            document.querySelector("#date").value = "";
            document.querySelector("#val").value = "";
            document.querySelector("#quant").value = "";
            document.querySelector(".hidden-edits").style.display = "none";
        });
    })
}

function products () {
    document.querySelector(".products").querySelector("span").innerText = `${document.querySelectorAll(".item").length}`;
}

orderByName.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("name").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
    });
    localStorage.setItem("orderBy", "name");
});

orderByDate.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("timestamp").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
    });
    localStorage.setItem("orderBy", "timestamp");

});

orderByPrice.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("price").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
    });
    localStorage.setItem("orderBy", "price");

});

orderByAmount.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("nowAmount").once("value").then(function (dataSnapshot) {
        fillProductList(dataSnapshot);
    });
    localStorage.setItem("orderBy", "nowAmount");

});

searchInventory.addEventListener('keyup', function (event) {
    if (searchInventory.value !== "") {
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).orderByChild("name").startAt(searchInventory.value).endAt(searchInventory.value + '\uf8ff').once("value").then(function (dataSnapshot) {
            fillProductList(dataSnapshot)
        })
    }
    else {
        firebase.database().ref(`users/${localStorage.getItem("uid")}/produtos`).once("value").then(function (dataSnapshot) {
            fillProductList(dataSnapshot)
        })
    }
})

moreOrLessSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    addRemove();
})

att.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("é isso aí filho da puta")
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
addSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (addName !== "" && addPrice !== "" && addAmount !== "") {
        let now = new Date();
        let infos = {
            name: addName.value,
            data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
            timestamp: now.getTime(),
            price: Number(addPrice.value),
            totalAmount: Number(addAmount.value),
            nowAmount: Number(addAmount.value),
            seller: 0
        }

        firebase.database().ref('users').child(firebase.auth().currentUser.uid).child("produtos").push(infos).then(function () {
            addName.value = "";
            addPrice.value = "";
            addAmount.value = "";
            addHidden.style.display = "none";
        }).catch(function (error) {
            console.log(error)
        })
    }
})