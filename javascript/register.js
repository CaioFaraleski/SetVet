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
})