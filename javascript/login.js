firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        loginForm.style.display = "none";
        registerForm.style.display = "none";
        if (user.emailVerified || user.providerData.providerId !== "password") {
            console.log(user)
            console.log(firebase.auth().currentUser.emailVerified)
            localStorage.setItem("uid", user.uid)
            localStorage.setItem("logado", "sim");
            checked.style.display = "flex";
        }
        else {
            localStorage.removeItem("uid")
            localStorage.setItem("logado", "sim");
            checkEmail.style.display = "flex";
            loginForm.style.display = "none";
            registerForm.style.display = "none";
        }
    } 
    else {
        localStorage.removeItem("uid")
        localStorage.setItem("logado", "nao");
        console.log("nao logado")
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
    document.querySelector(".signup").children[0].style.display = "none";
    document.querySelector(".signup").children[1].style.display = "block";
}

logout.addEventListener('click', function() {
    firebase.auth().signOut().catch(function (error) {
        showError('Falha ao sair da conta: ', error)
      });
});

function ifLoged (func) {
    if (localStorage.getItem("logado") === "sim") {
        console.log("ok")
    }
    else {
        func();
    } 
}

function notLoged (func) {
    if (localStorage.getItem("logado") === "sim") {
        console.log(func)
        func();
    }
    else {
        console.log("ok");
    }
}

const redirectTo = function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
};


