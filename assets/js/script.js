"use strict"



let toplama = document.querySelector(".buttons .Toplama");

let cixma = document.querySelector(".buttons .Cixma");

let vurma = document.querySelector(".buttons .Vurma");

let bolme = document.querySelector(".buttons .Bolme");




toplama.addEventListener("click", function () {

    let num1 = document.querySelector(".box-all .input1 .num1").value

    let num2 = document.querySelector(".box-all .input2 .num2").value


    let sum = Number(num1) + Number(num2)

    let res = document.querySelector(".result .res")

    res.value = sum;

})



cixma.addEventListener("click", function () {

    let num1 = document.querySelector(".box-all .input1 .num1").value

    let num2 = document.querySelector(".box-all .input2 .num2").value


    let sum = Number(num1) - Number(num2)

    let res = document.querySelector(".result .res")

    res.value = sum;

})




vurma.addEventListener("click", function () {

    let num1 = document.querySelector(".box-all .input1 .num1").value

    let num2 = document.querySelector(".box-all .input2 .num2").value


    let sum = Number(num1) * Number(num2)

    let res = document.querySelector(".result .res")

    res.value = sum;

})




bolme.addEventListener("click", function () {

    let num1 = document.querySelector(".box-all .input1 .num1").value

    let num2 = document.querySelector(".box-all .input2 .num2").value


    let sum = Number(num1) / Number(num2)

    let res = document.querySelector(".result .res")

    res.value = sum;

})









