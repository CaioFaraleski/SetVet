let leftArrow = document.querySelector(".left-arr");
let rightArrow = document.querySelector(".right-arr");
let months = document.querySelector(".months");
let month = document.querySelectorAll(".named");
let days = document.querySelector(".days").querySelectorAll("input");
let now = new Date();
let monthPhp = month[now.getMonth()].innerText;
let yearPhp = `${now.getFullYear()}`;
let dayPhp = `${now.getDate()}`;
let hiddenInput = document.querySelectorAll(".input-hidden");
let monthCore = "Dezembro";
let numMonthCore = 12;
let yearCore = "2021";
let squareCore = 3;
let squareCoreFinal = 8;
let inputOne = hiddenInput[0];
let InputTwo = hiddenInput[1];
let InputThree = hiddenInput[2];
let check = document.querySelector(".adicionar");


// function und () {
//     if (localStorage.year) {

    //     }
// }

function setYear () {
    if(localStorage.year !== undefined) {
        document.querySelector(".year").innerText = localStorage.year;
        
    }
    else {
        localStorage.setItem("year", `${yearPhp}`);
        document.querySelector(".year").innerText = localStorage.year;
    }
}

function setMonth () {
    if (localStorage.month !== undefined){
        document.querySelector(".month").innerText = localStorage.month;
    }
    else {
        localStorage.setItem("month", `${monthPhp}`);
        document.querySelector(".month").innerText = localStorage.month;
    }
}

function setDay () {
    if (localStorage.day !== undefined){
        document.querySelector(".theday").querySelector("span").innerText = localStorage.day;
    }
    else {
        localStorage.setItem("day", `${dayPhp}`);
        document.querySelector(".theday").querySelector("span").innerText = localStorage.day;
    }
}
setYear();
setMonth();
setDay();
createNumbers(squareAlign(localStorage.month, Number(localStorage.year)));


check.addEventListener("click", function() {
    if(check.checked) {
        document.querySelector(".calendar").style.display = "none";
        document.querySelector(".vaccine").style.display = "flex";
        document.querySelector(".check").children[0].children[0].innerText = "Agenda de Vacinação"
    }
    else {
        document.querySelector(".calendar").style.display = "flex";
        document.querySelector(".vaccine").style.display = "none";
        document.querySelector(".check").children[0].children[0].innerText = "Agenda Geral"
    }
});

leftArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) - 1;
    year.innerText = yearNumber;
    yearPhp = yearNumber;
    localStorage.setItem("year", `${yearPhp}`);
    inputOne.value = localStorage.year;
    InputTwo.value = localStorage.month;
    InputThree.value = localStorage.day;
    createNumbers(squareAlign(localStorage.month, Number(localStorage.year)));
});

rightArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) + 1;
    year.innerText = yearNumber;
    yearPhp = yearNumber;
    localStorage.setItem("year", `${yearPhp}`);
    inputOne.value = localStorage.year;
    InputTwo.value = localStorage.month;
    InputThree.value = localStorage.day;
    createNumbers(squareAlign(localStorage.month, Number(localStorage.year)));
});

month.forEach(function (theMonth) {
    theMonth.addEventListener("click", function(event) {
        let named = event.target.innerText;
        document.querySelector(".month").innerText = `${named}`;
        monthPhp = named;
        localStorage.setItem("month", `${named}`);
        inputOne.value = localStorage.year;
        InputTwo.value = localStorage.month;
        InputThree.value = localStorage.day;
        createNumbers(squareAlign(localStorage.month, Number(localStorage.year)));
    });
});

days.forEach(function (theDay) {
    theDay.addEventListener("click", function(event) {
        let named = event.target.value;
        if(named === "") {
            return;
        }
        else {
            document.querySelector(".theday").querySelector("span").innerText = `${named}`;
            dayPhp = named;
            localStorage.setItem("day", `${named}`);
            inputOne.value = localStorage.year;
            InputTwo.value = localStorage.month;
            InputThree.value = localStorage.day;
            createNumbers(squareAlign(localStorage.month, Number(localStorage.year)));
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

function numDays (num, yr) {
    if(Math.sign(num) === 1) {
        if(num % 12 === 1 ) {
            return 31;
        }
        if(num % 12 === 2) {
            if(Bissexto(yr)) {
                return 29;
            }
            else {
                return 28;
            }
        }
        if(num % 12 === 3) {
            return 31;
        }
        if(num % 12 === 4) {
            return 30;
        }
        if(num % 12 === 5) {
            return 31;
        }
        if(num % 12 === 6) {
            return 30;
        }
        if(num % 12 === 7) {
            return 31;
        }
        if(num % 12 === 8) {
            return 31;
        }
        if(num % 12 === 9) {
            return 30;
        }
        if(num % 12 === 10) {
            return 31;
        }
        if(num % 12 === 11) {
            return 30;
        }
        if(num % 12 === 0) {
            return 31;
        }
    }
    else if (Math.sign(num) === -1) {
        if(num % -12 === 0) {
            return 31;
        }
        if(num % -12 === -11) {
            if(Bissexto(yr)) {
                return 29;

            }
            else {
                return 28;

            }
        }
        if(num % -12 === -10) {
            return 31;
        }
        if(num % -12 === -9) {
            return 30;
        }
        if(num % -12 === -8) {
            return 31;
        }
        if(num % -12 === -7) {
            return 30;
        }
        if(num % -12 === -6) {
            return 31;
        }
        if(num % -12 === -5) {
            return 31;
        }
        if(num % -12 === -4) {
            return 30;
        }
        if(num % -12 === -3) {
            return 31;
        }
        if(num % -12 === -2) {
            return 30;
        }
        if(num % -12 === -1) {
            return 31;
        }
    }
    else if(num === 0) {
        return
    }
}

function daysOfMonth (mon, yr) {
    let quant;
    let num;
    if(mon === "Janeiro") {
        quant = 31;
        num = 1;
    }
    if(mon === "Fevereiro") {
        if(Bissexto(yr)) {
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

function squareAlign (mon, year) {
    
    let numOfDays = daysOfMonth(mon, year)[0];
    let numOfMonth = daysOfMonth(mon, year)[1];
    let numMonthSet;
    let numYearSet;

    if(year <= Number(yearCore)) {
        numMonthSet = 11;
        numYearSet = 2021;
        if(numOfMonth === numMonthCore && year === numYearSet) {
            return [squareCore, squareCoreFinal, (numDays(numMonthSet, numYearSet) + 1)];
        }

        year = yearCore - Number(year);
        year = year * 12;

        if(numOfMonth < numMonthCore || numOfMonth === numMonthCore) {
            let squareCoreMutant = squareCore;
            let squareFunction;
            let squareFunctionFinal;
            for (let i = 0; i < ((numMonthCore - daysOfMonth(mon, year)[1]) + year); i++) {
                squareCoreMutant = 7 - squareCoreMutant;
                numOfDays = numDays(numMonthSet, numYearSet);
                if (42 - (squareCoreMutant + numOfDays) > 7) {
                    squareFunctionFinal = 7;
                    squareFunctionFinal += squareCoreMutant;
                    squareFunction = 42 - (squareFunctionFinal + numOfDays);
                    squareCoreMutant = squareFunction;
                    numMonthSet = numMonthSet - 1;
                    if(numMonthSet < 1) {
                        numMonthSet = numMonthSet + 12;
                        numYearSet = numYearSet - 1;
                    }
                }
                else if (42 - (squareCoreMutant + numOfDays) === 7) {
                    squareFunction = 0;
                    squareCoreMutant = 0;
                    squareFunctionFinal = 42 - numOfDays;
                    numMonthSet = numMonthSet - 1;
                    if(numMonthSet < 1) {
                        numMonthSet = numMonthSet + 12;
                        numYearSet = numYearSet - 1;
                    }
                }
                else {
                    squareFunctionFinal = squareCoreMutant;
                    squareFunction = 42 - (squareFunctionFinal + numOfDays);
                    squareCoreMutant = squareFunction;
                    numMonthSet = numMonthSet - 1;
                    if(numMonthSet < 1) {
                        numMonthSet = numMonthSet + 12;
                        numYearSet = numYearSet - 1;
                    }
                }
            
            }
            return [squareFunction, squareFunctionFinal, numOfDays];
        }
    }
    else {
        numMonthSet = 1;
        numYearSet = 2022;
    
        if(numOfMonth === numMonthCore && year === Number(yearCore)) {
            return [squareCore, squareCoreFinal];
        }

        year = Number(year) - yearCore;
        year = year * 12;

        if(numOfMonth < numMonthCore || numOfMonth === numMonthCore) {
            let squareCoreMutant = squareCoreFinal;
            let squareFunction;
            let squareFunctionFinal;
            for (let i = 0; i < (year - (numMonthCore - daysOfMonth(mon, year)[1])); i++) {
                numOfDays = numDays(numMonthSet, numYearSet);
                if(squareCoreMutant % 7 === 0) {
                    squareFunction = 0;
                    squareFunctionFinal = 42 - (numOfDays - squareFunction);
                    squareCoreMutant = squareFunctionFinal;
                    numMonthSet++;
                    if(numMonthSet > 12) {
                        numMonthSet = 1;
                        numYearSet = numYearSet + 1;
                    }
                }
                else if (squareCoreMutant > 7) {
                    squareCoreMutant = squareCoreMutant - 7;
                    squareCoreMutant = 7 - squareCoreMutant;
                    squareFunction = squareCoreMutant;
                    squareFunctionFinal = 42 - (squareCoreMutant + numOfDays);
                    squareCoreMutant = squareFunctionFinal;
                    numMonthSet++;
                    if(numMonthSet > 12) {
                        numMonthSet = 1;
                        numYearSet = numYearSet + 1;
                    }
                }
                else if (squareCoreMutant < 7) {
                    squareCoreMutant = 7 - squareCoreMutant;
                    squareFunction = squareCoreMutant;
                    squareFunctionFinal = 42 - (squareCoreMutant + numOfDays);
                    squareCoreMutant = squareFunctionFinal;
                    numMonthSet++;
                    if(numMonthSet > 12) {
                        numMonthSet = 1;
                        numYearSet = numYearSet + 1;
                    }
                }
            
            }
            return [squareFunction, squareFunctionFinal, numOfDays];
        }
    }
    
}

function createNumbers (array) {
    let start = array[0];
    let end = array[1];
    let days = array[2];
    let inputs = 1;
    for (let i = 1; i <= start; i++) {
        document.querySelector(".days").querySelectorAll("input")[i - 1].value = "";
        document.querySelector(".days").querySelectorAll("input")[i - 1].style.cursor = "default"
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].className = "";
        document.querySelector(".days").querySelectorAll("input")[i - 1].addEventListener("click", function(event) {
            event.preventDefault();
        });
        inputs++;
    }
    for (let i = 1; i <= days; i++) {
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].value = `${i}`;
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].className = "hidden-submit";
        inputs++;
    }
    for (let i = 1; i <= end; i++) {
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].value = "";
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].style.cursor = "default";
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].className = "";
        document.querySelector(".days").querySelectorAll("input")[inputs - 1].addEventListener("click", function(event) {
            event.preventDefault();
        });
        inputs++;
    }
}