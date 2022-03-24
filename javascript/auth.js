loginForm.onsubmit = function (event) {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(loginForm.email.value, loginForm.password.value).then(function (user) {
    console.log("foi", user)
  }).catch(function (error) {
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
      let nameAc = {
        nameAccount: registerForm.namer.value
      }

      firebase.auth().createUserWithEmailAndPassword(registerForm.emailr.value, registerForm.passwordr.value).then(function () {
        firebase.database().ref('users').child(firebase.auth().currentUser.uid).push(nameAc).then(function () {
          console.log("ocorreu tudo bem2");
        }).catch(function (error) {
          console.log(error);
        });
      }).catch(function (error) {
        console.log(error);
      });
  
      
    }
    else {
      console.log('as senhas nao estão iguais')
    }
  }
  
}

checkEmail.children[1].addEventListener('click', function () {
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    checkEmail.children[0].innerText = `O e-mail de verificação foi enviado para ${firebase.auth().currentUser.email}`
  });
});



