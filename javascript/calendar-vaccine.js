let leftArrowVaccine = document.querySelector(".left-arr-vaccine");
let rightArrowVaccine = document.querySelector(".right-arr-vaccine");
let monthsVaccine = document.querySelector(".months-vaccine");
let monthVaccine = document.querySelectorAll(".named-vaccine");
let daysVaccine = document.querySelector(".days-vaccine").querySelectorAll("input");
let monthPhpVaccine = monthVaccine[11].innerText;
let yearPhpVaccine = document.querySelector(".year-vaccine").innerText;
let dayPhpVaccine = document.querySelector(".theday-vaccine").querySelector("span").innerText;
let hiddenInputVaccine = document.querySelectorAll(".input-hidden-vaccine");
let monthCoreVaccine = "Dezembro";
let numMonthCoreVaccine = 12;
let yearCoreVaccine = "2021";
let squareCoreVaccine = 3;
let squareCoreFinalVaccine = 8;
let inputOneVaccine = hiddenInputVaccine[0];
let InputTwoVaccine = hiddenInputVaccine[1];
let InputThreeVaccine = hiddenInputVaccine[2];

function setYearVaccine () {
    if(localStorage.yearVaccine !== undefined) {
        document.querySelector(".year-vaccine").innerText = localStorage.yearVaccine;
        
    }
    else {
        localStorage.setItem("yearVaccine", `${yearPhpVaccine}`);
    }
}

function setMonthVaccine () {
    if (localStorage.monthVaccine !== undefined){
        document.querySelector(".month-vaccine").innerText = localStorage.monthVaccine;
    }
    else {
        localStorage.setItem("monthVaccine", `${monthPhpVaccine}`);
    }
}

function setDayVaccine () {
    if (localStorage.dayVaccine !== undefined){
        document.querySelector(".theday-vaccine").querySelector("span").innerText = localStorage.dayVaccine;
    }
    else {
        localStorage.setItem("dayVaccine", `${dayPhpVaccine}`);
    }
}
setYearVaccine();
setMonthVaccine();
setDayVaccine();
createNumbersVaccine(squareAlignVaccine(localStorage.monthVaccine, Number(localStorage.yearVaccine)));


leftArrowVaccine.addEventListener("click", function () {
    let yearVaccine = document.querySelector(".year-vaccine");
    let yearNumberVaccine = Number(yearVaccine.innerText) - 1;
    yearVaccine.innerText = yearNumberVaccine;
    yearPhpVaccine = yearNumberVaccine;
    localStorage.setItem("yearVaccine", `${yearPhpVaccine}`);
    inputOneVaccine.value = localStorage.yearVaccine;
    InputTwoVaccine.value = localStorage.monthVaccine;
    InputThreeVaccine.value = localStorage.dayVaccine;
    createNumbersVaccine(squareAlignVaccine(localStorage.monthVaccine, Number(localStorage.yearVaccine)));
});

rightArrowVaccine.addEventListener("click", function () {
    let yearVaccine = document.querySelector(".year-vaccine");
    let yearNumberVaccine = Number(yearVaccine.innerText) + 1;
    yearVaccine.innerText = yearNumberVaccine;
    yearPhpVaccine = yearNumberVaccine;
    localStorage.setItem("yearVaccine", `${yearPhpVaccine}`);
    inputOneVaccine.value = localStorage.yearVaccine;
    InputTwoVaccine.value = localStorage.monthVaccine;
    InputThreeVaccine.value = localStorage.dayVaccine;
    createNumbersVaccine(squareAlignVaccine(localStorage.monthVaccine, Number(localStorage.yearVaccine)));
});

monthVaccine.forEach(function (theMonth) {
    theMonth.addEventListener("click", function(event) {
        let namedVaccine = event.target.innerText;
        document.querySelector(".month-vaccine").innerText = `${namedVaccine}`;
        monthPhpVaccine = namedVaccine;
        localStorage.setItem("monthVaccine", `${namedVaccine}`);
        inputOneVaccine.value = localStorage.yearVaccine;
        InputTwoVaccine.value = localStorage.monthVaccine;
        InputThreeVaccine.value = localStorage.dayVaccine;
        createNumbersVaccine(squareAlignVaccine(localStorage.monthVaccine, Number(localStorage.yearVaccine)));
    });
});

daysVaccine.forEach(function (theDay) {
    theDay.addEventListener("click", function(event) {
        let namedVaccine = event.target.value;
        if(namedVaccine === "") {
            return;
        }
        else {
            document.querySelector(".theday-vaccine").querySelector("span").innerText = `${namedVaccine}`;
            dayPhpVaccine = namedVaccine;
            localStorage.setItem("dayVaccine", `${namedVaccine}`);
            inputOneVaccine.value = localStorage.yearVaccine;
            InputTwoVaccine.value = localStorage.monthVaccine;
            InputThreeVaccine.value = localStorage.dayVaccine;
            createNumbersVaccine(squareAlignVaccine(localStorage.monthVaccine, Number(localStorage.yearVaccine)));
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

function daysOfMonthVaccine (mon, yr) {
    let quantVaccine;
    let numVaccine;
    if(mon === "Janeiro") {
        quantVaccine = 31;
        numVaccine = 1;
    }
    if(mon === "Fevereiro") {
        if(Bissexto(yr)) {
            quantVaccine = 29;
            numVaccine = 2;
        }
        else {
            quantVaccine = 28;
            numVaccine = 2;
        }
    }
    if(mon === "MarÃ§o") {
        quantVaccine = 31;
        numVaccine = 3;
    }
    if(mon === "Abril") {
        quantVaccine = 30;
        numVaccine = 4;
    }
    if(mon === "Maio") {
        quantVaccine = 31;
        numVaccine = 5;
    }
    if(mon === "Junho") {
        quantVaccine = 30;
        numVaccine = 6;
    }
    if(mon === "Julho") {
        quantVaccine = 31;
        numVaccine = 7;
    }
    if(mon === "Agosto") {
        quantVaccine = 31;
        numVaccine = 8;
    }
    if(mon === "Setembro") {
        quantVaccine = 30;
        numVaccine = 9;
    }
    if(mon === "Outubro") {
        quantVaccine = 31;
        numVaccine = 10;
    }
    if(mon === "Novembro") {
        quantVaccine = 30;
        numVaccine = 11;
    }
    if(mon === "Dezembro") {
        quantVaccine = 31;
        numVaccine = 12;
    }
    return [quantVaccine, numVaccine];
}

function squareAlignVaccine (mon, year) {
    
    let numOfDaysVaccine = daysOfMonthVaccine(mon, year)[0];
    let numOfMonthVaccine = daysOfMonthVaccine(mon, year)[1];
    let numMonthSetVaccine;
    let numYearSetVaccine;

    if(year <= Number(yearCoreVaccine)) {
        numMonthSetVaccine = 11;
        numYearSetVaccine = 2021;
        if(numOfMonthVaccine === numMonthCoreVaccine && year === numYearSetVaccine) {
            return [squareCoreVaccine, squareCoreFinalVaccine, (numDays(numMonthSetVaccine, numYearSetVaccine) + 1)];
        }

        year = yearCoreVaccine - Number(year);
        year = year * 12;

        if(numOfMonthVaccine < numMonthCoreVaccine || numOfMonthVaccine === numMonthCoreVaccine) {
            let squareCoreMutantVaccine = squareCoreVaccine;
            let squareFunctionVaccine;
            let squareFunctionFinalVaccine;
            for (let i = 0; i < ((numMonthCoreVaccine - daysOfMonthVaccine(mon, year)[1]) + year); i++) {
                squareCoreMutantVaccine = 7 - squareCoreMutantVaccine;
                numOfDaysVaccine = numDays(numMonthSetVaccine, numYearSetVaccine);
                if (42 - (squareCoreMutantVaccine + numOfDaysVaccine) > 7) {
                    squareFunctionFinalVaccine = 7;
                    squareFunctionFinalVaccine += squareCoreMutantVaccine;
                    squareFunctionVaccine = 42 - (squareFunctionFinalVaccine + numOfDaysVaccine);
                    squareCoreMutantVaccine = squareFunctionVaccine;
                    numMonthSetVaccine = numMonthSetVaccine - 1;
                    if(numMonthSetVaccine < 1) {
                        numMonthSetVaccine = numMonthSetVaccine + 12;
                        numYearSetVaccine = numYearSetVaccine - 1;
                    }
                }
                else if (42 - (squareCoreMutantVaccine + numOfDaysVaccine) === 7) {
                    squareFunctionVaccine = 0;
                    squareCoreMutantVaccine = 0;
                    squareFunctionFinalVaccine = 42 - numOfDaysVaccine;
                    numMonthSetVaccine = numMonthSetVaccine - 1;
                    if(numMonthSetVaccine < 1) {
                        numMonthSetVaccine = numMonthSetVaccine + 12;
                        numYearSetVaccine = numYearSetVaccine - 1;
                    }
                }
                else {
                    squareFunctionFinalVaccine = squareCoreMutantVaccine;
                    squareFunctionVaccine = 42 - (squareFunctionFinalVaccine + numOfDaysVaccine);
                    squareCoreMutantVaccine = squareFunctionVaccine;
                    numMonthSetVaccine = numMonthSetVaccine - 1;
                    if(numMonthSetVaccine < 1) {
                        numMonthSetVaccine = numMonthSetVaccine + 12;
                        numYearSetVaccine = numYearSetVaccine - 1;
                    }
                }
            
            }
            return [squareFunctionVaccine, squareFunctionFinalVaccine, numOfDaysVaccine];
        }
    }
    else {
        numMonthSetVaccine = 1;
        numYearSetVaccine = 2022;
    
        if(numOfMonthVaccine === numMonthCoreVaccine && year === Number(yearCoreVaccine)) {
            return [squareCoreVaccine, squareCoreFinalVaccine];
        }

        year = Number(year) - yearCoreVaccine;
        year = year * 12;

        if(numOfMonthVaccine < numMonthCoreVaccine || numOfMonthVaccine === numMonthCoreVaccine) {
            let squareCoreMutantVaccine = squareCoreFinalVaccine;
            let squareFunctionVaccine;
            let squareFunctionFinalVaccine;
            for (let i = 0; i < (year - (numMonthCoreVaccine - daysOfMonthVaccine(mon, year)[1])); i++) {
                numOfDaysVaccine = numDays(numMonthSetVaccine, numYearSetVaccine);
                if(squareCoreMutantVaccine % 7 === 0) {
                    squareFunctionVaccine = 0;
                    squareFunctionFinalVaccine = 42 - (numOfDaysVaccine - squareFunctionVaccine);
                    squareCoreMutantVaccine = squareFunctionFinalVaccine;
                    numMonthSetVaccine++;
                    if(numMonthSetVaccine > 12) {
                        numMonthSetVaccine = 1;
                        numYearSetVaccine = numYearSetVaccine + 1;
                    }
                }
                else if (squareCoreMutantVaccine > 7) {
                    squareCoreMutantVaccine = squareCoreMutantVaccine - 7;
                    squareCoreMutantVaccine = 7 - squareCoreMutantVaccine;
                    squareFunctionVaccine = squareCoreMutantVaccine;
                    squareFunctionFinalVaccine = 42 - (squareCoreMutantVaccine + numOfDaysVaccine);
                    squareCoreMutantVaccine = squareFunctionFinalVaccine;
                    numMonthSetVaccine++;
                    if(numMonthSetVaccine > 12) {
                        numMonthSetVaccine = 1;
                        numYearSetVaccine = numYearSetVaccine + 1;
                    }
                }
                else if (squareCoreMutantVaccine < 7) {
                    squareCoreMutantVaccine = 7 - squareCoreMutantVaccine;
                    squareFunctionVaccine = squareCoreMutantVaccine;
                    squareFunctionFinalVaccine = 42 - (squareCoreMutantVaccine + numOfDaysVaccine);
                    squareCoreMutantVaccine = squareFunctionFinalVaccine;
                    numMonthSetVaccine++;
                    if(numMonthSetVaccine > 12) {
                        numMonthSetVaccine = 1;
                        numYearSetVaccine = numYearSetVaccine + 1;
                    }
                }
            
            }
            return [squareFunctionVaccine, squareFunctionFinalVaccine, numOfDaysVaccine];
        }
    }
    
}

function createNumbersVaccine (array) {
    let startVaccine = array[0];
    let endVaccine = array[1];
    let daysVaccine = array[2];
    let inputsVaccine = 1;
    for (let i = 1; i <= startVaccine; i++) {
        document.querySelector(".days-vaccine").querySelectorAll("input")[i - 1].value = "";
        document.querySelector(".days-vaccine").querySelectorAll("input")[inputsVaccine - 1].style.cursor = "default";
        document.querySelector(".days-vaccine").querySelectorAll("input")[i - 1].addEventListener("click", function(event) {
            event.preventDefault();
        });
        inputsVaccine++;
    }
    for (let i = 1; i <= daysVaccine; i++) {
        document.querySelector(".days-vaccine").querySelectorAll("input")[inputsVaccine - 1].value = `${i}`;
        document.querySelector(".days-vaccine").querySelectorAll("input")[inputsVaccine - 1].className = "hidden-submitVaccine";
        inputsVaccine++;
    }
    for (let i = 1; i <= endVaccine; i++) {
        document.querySelector(".days-vaccine").querySelectorAll("input")[inputsVaccine - 1].value = "";
        document.querySelector(".days-vaccine").querySelectorAll("input")[inputsVaccine - 1].style.cursor = "default";
        document.querySelector(".days-vaccine").querySelectorAll("input")[inputsVaccine - 1].addEventListener("click", function(event) {
            event.preventDefault();
        });
        inputsVaccine++;
    }
}