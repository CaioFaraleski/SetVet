let leftArrow = document.querySelector(".left-arr");
let rightArrow = document.querySelector(".right-arr");
let months = document.querySelector(".months");
let month = document.querySelectorAll(".named");
let days = document.querySelector(".days").querySelectorAll("input");
let monthPhp = month[11].innerText;
let yearPhp = document.querySelector(".year").innerText;
let dayPhp = document.querySelector(".theday").querySelector("span").innerText;
let hiddenInput = document.querySelectorAll(".input-hidden");
let monthCore = "Dezembro";
let numMonthCore = 12;
let yearCore = "2021";
let squareCore = 3;
let squareCoreFinal = 8;

function setYear () {
    if(localStorage.year !== undefined) {
        document.querySelector(".year").innerText = localStorage.year;
    }
    else {
        localStorage.setItem("year", Number(yearCore));
    }
}

function setDay () {
    if(localStorage.day !== undefined) {
        document.querySelector(".theday").querySelector("span").innerText = localStorage.day;
    }
    else {
        localStorage.setItem("day", "1");
    }
}

function setMonth () {
    if(localStorage.month !== undefined) {
        document.querySelector(".month").innerText = localStorage.month;
    }
    else {
        localStorage.setItem("month", monthCore);
    }
}    
setYear();
setMonth();
setDay();

leftArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) - 1;
    year.innerText = yearNumber;
    yearPhp = yearNumber;
    localStorage.setItem("year", `${yearPhp}`);
    console.log(squareAlign(localStorage.month, Number(localStorage.year)));
});

rightArrow.addEventListener("click", function () {
    let year = document.querySelector(".year");
    let yearNumber = Number(year.innerText) + 1;
    year.innerText = yearNumber;
    yearPhp = yearNumber;
    localStorage.setItem("year", `${yearPhp}`);
});

month.forEach(function (theMonth) {
    theMonth.addEventListener("click", function(event) {
        let named = event.target.innerText;
        document.querySelector(".month").innerText = `${named}`;
        monthPhp = named;
        localStorage.setItem("month", `${named}`);
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
            localStorage.setItem("day", `${named}`);
            inputOne.value = yearPhp;
            InputTwo.value = monthPhp;
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
    let numMonthSet = 11;
    let numYearSet = 2021;
    
    if(numOfMonth === numMonthCore && year === numYearSet) {
        return [squareCore, squareCoreFinal];
    }

    year = yearCore - Number(year);
    year = year * 12;
    console.log(year)

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
        return [squareFunction, squareFunctionFinal];
    }
    
}
