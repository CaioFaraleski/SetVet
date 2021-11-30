let img = document.querySelector('.arrow');
let div = document.querySelector('.pets');

function myFunction() {
    if(img.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB0jsrUO9DnujP8Tjdm3NBzQ3ax6rF_bEVg&usqp=CAU") {
        div.style.display = "block";
        img.src = "https://cdn-icons-png.flaticon.com/512/271/271239.png";
    }
    else if(img.src === "https://cdn-icons-png.flaticon.com/512/271/271239.png") {
        div.style.display = "none";
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB0jsrUO9DnujP8Tjdm3NBzQ3ax6rF_bEVg&usqp=CAU";
    }
}

console.log(img.src)