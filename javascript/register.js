funcButton.addEventListener('click', function() {
    if (funcButton.innerText === "Não possui uma conta?") {
        funcButton.innerText = "Já possui uma conta?";
        loginOrRegister.children[0].children[0].innerText = "Crie uma conta";
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }
    else {
        funcButton.innerText = "Não possui uma conta?";
        loginOrRegister.children[0].children[0].innerText = "Entre";
        registerForm.style.display = "none";
        loginForm.style.display = "flex";
    }
});

document.querySelectorAll(".loginWithFacebook").forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loginTwitter();
    });
});

function loginFacebook () {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).catch(function (error) {
        console.log(error)
    });
}

document.querySelectorAll(".loginWithGoogle").forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loginTwitter();
    });
});

function loginGoogle () {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error) {
        console.log(error)
    });
}

document.querySelectorAll(".loginWithTwitter").forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loginTwitter();
    });
});


function loginTwitter () {
    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).catch(function (error) {
        console.log(error)
    });
}