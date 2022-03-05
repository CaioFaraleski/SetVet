firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (firebase.auth().currentUser.emailVerified) {
            localStorage.setItem("logado", "sim")
        }
        else {
            localStorage.setItem("logado", "nao")
        }
    } 
    else {
        localStorage.setItem("logado", "nao")
    }
});


if (localStorage.logado === "sim") {
    document.querySelector(".buttons-home").children[0].style.margin = "0"
            document.querySelector(".buttons-home").children[1].style.display = "flex"
            document.querySelector(".buttons-home").children[1].style.margin = "0"
            document.querySelector(".buttons-home").children[2].style.display = "flex"
            document.querySelector(".buttons-home").children[2].style.margin = "0"
            document.querySelector(".buttons-home").children[3].style.display = "flex"
            document.querySelector(".buttons-home").children[3].style.margin = "0"
            document.querySelector(".buttons-home").children[4].style.display = "flex"
            document.querySelector(".buttons-home").children[4].style.margin = "0"
            document.querySelector(".buttons-home").children[5].style.margin = "0"
            document.querySelector(".buttons-home").style.justifyContent = "space-between"
}