let section = document.querySelectorAll("section");

function estaVisivel(el) {
    const posicoes = el.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;
    let estaVisivel = false
    
    if((inicio >= 0) && (fim - 160 <= window.innerHeight)) {
            estaVisivel = true;
    }
    
    return estaVisivel;
    
}

if (estaVisivel(section[0])) {
    section[0].children[0].style.display = "block";
    section[0].children[0].className = "animate__animated animate__fadeIn";
    section[0].children[1].children[0].className = "title animate__animated animate__fadeInRight";
    section[0].children[1].children[1].className = "text animate__animated animate__fadeInRight";
    section[0].children[1].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInRight";
    section[0].children[1].children[0].style.display = "block";
    section[0].children[1].children[1].style.display = "block";
    section[0].children[1].children[2].style.display = "flex";
}

document.addEventListener("scroll", function() {
    if (estaVisivel(section[0])) {
        section[0].children[0].style.display = "block";
        section[0].children[0].className = "animate__animated animate__fadeIn";
        section[0].children[1].children[0].className = "title animate__animated animate__fadeInRight";
        section[0].children[1].children[1].className = "text animate__animated animate__fadeInRight";
        section[0].children[1].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInRight";
        section[0].children[1].children[0].style.display = "block";
        section[0].children[1].children[1].style.display = "block";
        section[0].children[1].children[2].style.display = "flex";
    }
    else if (estaVisivel(section[1])) {
        section[1].children[1].style.display = "block";
        section[1].children[1].className = "animate__animated animate__fadeIn";
        section[1].children[0].children[0].className = "title animate__animated animate__fadeInLeft";
        section[1].children[0].children[1].className = "text right animate__animated animate__fadeInLeft";
        section[1].children[0].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft";
        section[1].children[0].children[0].style.display = "block";
        section[1].children[0].children[1].style.display = "block";
        section[1].children[0].children[2].style.display = "flex";
    }
    else if (estaVisivel(section[2])) {
        section[2].children[0].style.display = "block";
        section[2].children[0].className = "animate__animated animate__fadeIn";
        section[2].children[1].children[0].className = "title animate__animated animate__fadeInRight";
        section[2].children[1].children[1].className = "text animate__animated animate__fadeInRight";
        section[2].children[1].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInRight";
        section[2].children[1].children[0].style.display = "block";
        section[2].children[1].children[1].style.display = "block";
        section[2].children[1].children[2].style.display = "flex";
    }
    else if (estaVisivel(section[3])) {
        section[3].children[1].style.display = "block";
        section[3].children[1].className = "animate__animated animate__fadeIn";
        section[3].children[0].children[0].className = "title animate__animated animate__fadeInLeft";
        section[3].children[0].children[1].className = "text right animate__animated animate__fadeInLeft";
        section[3].children[0].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft";
        section[3].children[0].children[0].style.display = "block";
        section[3].children[0].children[1].style.display = "block";
        section[3].children[0].children[2].style.display = "flex";
    }
});

// section[1].addEventListener("mouseover", function() {
//     section[1].children[1].style.display = "block";
//         section[1].children[1].className = "animate__animated animate__fadeIn";
//         section[1].children[0].children[0].className = "title animate__animated animate__fadeInLeft";
//         section[1].children[0].children[1].className = "text right animate__animated animate__fadeInLeft";
//         section[1].children[0].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft";
//         section[1].children[0].children[0].style.display = "block";
//         section[1].children[0].children[1].style.display = "block";
//         section[1].children[0].children[2].style.display = "flex";
    
// });

// section[2].addEventListener("mouseover", function() {
//     section[2].children[0].style.display = "block";
//     section[2].children[0].className = "animate__animated animate__fadeIn";
//     section[2].children[1].children[0].className = "title animate__animated animate__fadeInRight";
//     section[2].children[1].children[1].className = "text animate__animated animate__fadeInRight";
//     section[2].children[1].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInRight";
//     section[2].children[1].children[0].style.display = "block";
//     section[2].children[1].children[1].style.display = "block";
//     section[2].children[1].children[2].style.display = "flex";
// });

// section[3].addEventListener("mouseover", function() {
//     section[3].children[1].style.display = "block";
//     section[3].children[1].className = "animate__animated animate__fadeIn";
//     section[3].children[0].children[0].className = "title animate__animated animate__fadeInLeft";
//     section[3].children[0].children[1].className = "text right animate__animated animate__fadeInLeft";
//     section[3].children[0].children[2].className = "mt-4 d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft";
//     section[3].children[0].children[0].style.display = "block";
//     section[3].children[0].children[1].style.display = "block";
//     section[3].children[0].children[2].style.display = "flex";
// });
