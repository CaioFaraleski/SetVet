let addProduct = document.querySelector(".add-service");
let exit = document.querySelector(".exit");
let wind = document.querySelector(".hidden");
let divInput = document.querySelector(".input");
let imgs = document.querySelectorAll(".img");
let orderBy = document.querySelector(".orderby");
let orderBySelected = localStorage.getItem("orderByService") ? localStorage.getItem("orderByService") : "name";

ifLoged(redirectTo);

firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).orderByChild(orderBySelected).on("value", function (dataSnapshot) {
    fillServicesList(dataSnapshot)
    
})

function fillServicesList (dataSnapshot) {
    document.querySelector(".sub-table").innerHTML = "";
    let name;
    let description;
    let numImageService;
    dataSnapshot.forEach(function (item) {
        let cardService = document.createElement("div");
        let insideCard = document.createElement("div");
        let divDelete = document.createElement("div");
        let imageDelete = document.createElement("img");
        let figureService = document.createElement("figure");
        let imageService = document.createElement("img");
        let nameService = document.createElement("div");
        let divDescription = document.createElement("div");
        name = item.val().name;
        description = item.val().description;
        numImageService = item.val().numImage;
        cardService.classList.add("card-service", "d-flex", "flex-column", "align-items-center", "justify-content-center");
        document.querySelector(".sub-table").appendChild(cardService);
        insideCard.classList.add("inside", "d-flex", "flex-column", "justify-content-center");
        cardService.appendChild(insideCard);
        divDelete.classList.add("w-100", "delete", "justify-content-end");
        insideCard.appendChild(divDelete);
        imageDelete.classList.add("h-100", "removeService");
        imageDelete.setAttribute("id", item.key);
        imageDelete.setAttribute("src", `assets/img/inventory/delete-item.png`);
        divDelete.appendChild(imageDelete);
        insideCard.appendChild(figureService);
        imageService.classList.add("w-100", "h-100");
        imageService.setAttribute("src", `assets/img/services/${numImageService}.png`);
        figureService.appendChild(imageService);
        nameService.innerHTML = name;
        insideCard.appendChild(nameService)
        divDescription.classList.add("hdn");
        divDescription.innerText = description;
        insideCard.appendChild(divDescription);
    })
    document.querySelectorAll(".card-service").forEach(function (div) {
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
    document.querySelectorAll(".card-service").forEach(function (div) {
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
    document.querySelectorAll(".removeService").forEach(function (item) {
        item.addEventListener('click', function (event) {
            deleteItem(event.target);
        })
    });
}

function deleteItem (target) {
    firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).child(target.id).remove().then(function () {
        console.log("hahahahahahahahahahahahaahahazhahahahahaha puta")
    });
}

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

orderBy.children[0].addEventListener('click', function () {
    if(orderBy.children[0].children[1].children[0].src === "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png") {
        orderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/up-arrow.png";
        orderBy.children[1].style.display = "flex";
    }
    else if(orderBy.children[0].children[1].children[0].src === "https://caiofaraleski.github.io/SetVet/assets/img/inventory/up-arrow.png") {
        orderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
        orderBy.children[1].style.display = "none";
    }
});

orderByNameService.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).orderByChild("name").once("value").then(function (dataSnapshot) {
        fillServicesList(dataSnapshot);
    });
    localStorage.setItem("orderByService", "name");
    orderBy.children[1].style.display = "none";
    orderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

orderByDateService.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).orderByChild("timestamp").once("value").then(function (dataSnapshot) {
        fillServicesList(dataSnapshot);
    });
    localStorage.setItem("orderByService", "timestamp");
    orderBy.children[1].style.display = "none";
    orderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

orderByImageService.addEventListener('click', function (event) {
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
    firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).orderByChild("numImage").once("value").then(function (dataSnapshot) {
        fillServicesList(dataSnapshot);
    });
    localStorage.setItem("orderByService", "numImage");
    orderBy.children[1].style.display = "none";
    orderBy.children[0].children[1].children[0].src = "https://caiofaraleski.github.io/SetVet/assets/img/inventory/down-arrow.png";
});

imgs.forEach(function (img) {
    img.addEventListener("click", function(event) {
        let src = img.src;
        console.log(img)
        document.querySelector(".hdn").value = src;
        document.querySelector(".default").src = src;
    });
});

addProduct.addEventListener("click", function () {
    wind.style.display = "block";
    document.querySelector(".order-list").style.top = "136px"
    withBlur();
});

exit.children[0].addEventListener("click", function () {
    wind.style.display = "none";
    withoutBlur();
});

searchServices.addEventListener('keyup', function (event) {
    if (searchServices.value !== "") {
        firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).orderByChild("nameToLowerCase").startAt(searchServices.value.toLowerCase()).endAt(searchServices.value.toLowerCase() + '\uf8ff').once("value").then(function (dataSnapshot) {
            fillServicesList(dataSnapshot)
        })
    }
    else {
        firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).orderByChild("name").once("value").then(function (dataSnapshot) {
            fillServicesList(dataSnapshot)
        })
    }
})

addServiceSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    let name = addNameService.value;
    let numImg = imageServiceNumber.value.replace(".png", "");
    numImg = numImg.replace("https://caiofaraleski.github.io/SetVet/assets/img/services/", "");
    let description = addDescriptionService.value;
    console.log(name.toLowerCase())
    let now = new Date();
    let nameToLowerCase = name.toLowerCase();
    let data = {
        name: name,
        description: description,
        numImage: numImg,
        timestamp: now.getTime(),
        nameToLowerCase: nameToLowerCase
    }
    firebase.database().ref(`users/${localStorage.getItem("uid")}/services`).push(data).then(function () {
        console.log("foi porra, adicionado com succes");
    }).catch(function (error) {
        console.log(error)
    });
    wind.style.display = "none";
    withoutBlur();
})

document.querySelectorAll(".removeService").forEach(function (item) {
    item.addEventListener('click', function (event) {
        console.log("x paiiiiiiiiiiiiiii")
    });
})
