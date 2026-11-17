function timedAction() {
    let box = document.querySelector("box");

    let newpara = document.createElement("p");
    newpara.textcontent = "i am a box";
}

let timerID = setInterval(timedAction, 2000)

let paaostikko = document.getElementById("#paaotsikko");
console.log(paaostikko);


let paragrahps = document.getElementsByTagName("P");
console.log(paragrahps)

let box = document.querySelector("box");
let paraHTML = "<p> i am a box!!!!</p>";
boxDiv.innerHTML = paraHTML