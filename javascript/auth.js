let dataa = {
  name: "caio"
}

loginForm.onsubmit = function (event) {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(loginForm.email.value, loginForm.password.value).catch(function (error) {
    console.log(error)
  });
}

registerForm.onsubmit = function (event) {
  event.preventDefault();
  if (namer.value === '' || emailr.value === '' || passwordr.value === '' || checkpass.value === '') {
    console.log('preencha todos os campos')
  }
  else {
    if (passwordr.value === checkpass.value) {
      firebase.auth().createUserWithEmailAndPassword(registerForm.emailr.value, registerForm.passwordr.value).catch(function (error) {
        console.log(error)
      });
  
      firebase.database().ref('users').child(firebase.auth().currentUser.uid).push({nameAccount: registerForm.namer.value}).catch(function (error) {
        console.log(error)
      })
    }
    else {
      console.log('as senhas nao estão iguais')
    }
  }
  
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    loginForm.style.display = "none";
    if (firebase.auth().currentUser.emailVerified) {
      checked.style.display = "flex";
    }
    else {
      checkEmail.style.display = "flex"
    }
  } else {
    console.log("nao logado")
  }
});

checkEmail.children[1].addEventListener('click', function () {
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    checkEmail.children[0].innerText = `O e-mail de verificação foi enviado para ${firebase.auth().currentUser.email}`
  });
});



