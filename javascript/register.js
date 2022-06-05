funcButton.addEventListener('click', function() {
    if (funcButton.innerText === "Não possui uma conta?") {
        funcButton.innerText = "Já possui uma conta?";
        loginOrRegister.children[0].children[0].children[0].innerText = "Registre-se";
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }
    else {
        funcButton.innerText = "Não possui uma conta?";
        loginOrRegister.children[0].children[0].children[0].innerText = "Entre";
        registerForm.style.display = "none";
        loginForm.style.display = "flex";
    }
});

document.querySelectorAll(".loginWithFacebook").forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loginFacebook();
    });
});

function loginGithub () {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).catch(function (error) {
        console.log(error)
    });
}

document.querySelectorAll(".loginWithGoogle").forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loginGoogle();
    });
});

function loginGoogle () {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error) {
        console.log(error)
    });
}

document.querySelectorAll(".loginWithGithub").forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        loginGithub();
    });
});


function loginFacebook () {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).catch(function (error) {
        console.log(error)
    });
}