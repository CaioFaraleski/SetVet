let leftArrow = document.querySelector(".left-arr");
let rightArrow = document.querySelector(".right-arr");
let months = document.querySelector(".months");
let month = document.querySelectorAll(".named");
let days = document.querySelector(".days").querySelectorAll("input");
let monthPhp = month[11].innerText;
let yearPhp = document.querySelector(".year").innerText;
let dayPhp = document.querySelector(".theday").querySelector("span").innerText;
let hiddenInput = document.querySelectorAll(".input-hidden");

leftArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) - 1;
    year.innerText = yearNumber;
    yearPhp = yearNumber;
});

rightArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) + 1;
    year.innerText = yearNumber;
    yearPhp = yearNumber;
});

month.forEach(function (theMonth) {
    theMonth.addEventListener("click", function(event) {
        let named = event.target.innerText;
        document.querySelector(".month").innerText = `${named}`;
        monthPhp = named;
    });
});

days.forEach(function (theDay) {
    theDay.addEventListener("click", function(event) {
        let named = event.target.value;
        if(named === "") {
            return;
        }
        else {
            let inputOne = hiddenInput[0];
            let InputTwo = hiddenInput[1];
            document.querySelector(".theday").querySelector("span").innerText = `${named}`;
            dayPhp = named;
            inputOne.value = yearPhp;
            InputTwo = monthPhp;
        }
    });
});

function Bissexto (year) {
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

function daysOfMonth (mon) {
    let quant;
    let num;
    if(mon === "Janeiro") {
        quant = 31;
        num = 1;
    }
    if(mon === "Fevereiro") {
        if(Bissexto(Number(document.querySelector(".year").innerText))) {
            quant = 29;
            num = 2;
        }
        else {
            quant = 28;
            num = 2;
        }
    }
    if(mon === "Março") {
        quant = 31;
        num = 3;
    }
    if(mon === "Abril") {
        quant = 30;
        num = 4;
    }
    if(mon === "Maio") {
        quant = 31;
        num = 5;
    }
    if(mon === "Junho") {
        quant = 30;
        num = 6;
    }
    if(mon === "Julho") {
        quant = 31;
        num = 7;
    }
    if(mon === "Agosto") {
        quant = 31;
        num = 8;
    }
    if(mon === "Setembro") {
        quant = 30;
        num = 9;
    }
    if(mon === "Outubro") {
        quant = 31;
        num = 10;
    }
    if(mon === "Novembro") {
        quant = 30;
        num = 11;
    }
    if(mon === "Dezembro") {
        quant = 31;
        num = 12;
    }
    return [quant, num];
}