let jmeno1 ="Hráč 1";
let jmeno2 ="Hráč 2";
const dice = document.getElementById('dice');
const playButton = document.getElementById('play');
const result = document.getElementById('result');
const buttonj1 = document.getElementById("buttonj1");
const buttonj2 = document.getElementById("buttonj2");
let turn = [];
let timer = false;
let rounds = [];
rounds[0] = [];
rounds[1] = [];

function animation() {
    turn[0] = Math.ceil(Math.random() * 6);
    dice1.src = `img/kostka${turn[0]}.png`;
    turn[1] = Math.ceil(Math.random() * 6);
    dice2.src = `img/kostka${turn[1]}.png`;
}

function sum(index) {
    let s = 0;
    for (i = 0; i < rounds[index].length; i++) {
        s += rounds[index][i];
    }
    return s;
}

function max(index) {
   let mx = 1;
   rounds[index].forEach(function(value) {
       if (value > mx) mx = value;
   }) 
   return mx;
}
function min(index) {
    let mn = 6;
    rounds[index].forEach(function(value) {
        if (value < mn) mn = value;
    }) 
    return mn;
 }

function stats(index) {
    let results = `<h3 class="text-center">${jmeno1}</h3>`;
    results +=  `<p>Aktuální hod: ${turn[index]}</p>`;
    results += `<p>Hody: ${rounds[index]}</p>`;
    results += `<p>Počet hodů: ${rounds[index].length}</p>`;
    results += `<p>Součet hodů: ${sum(index)}</p>`;
    results += `<p>Průměr hodů: ${(sum(index)/rounds[index].length).toFixed(2)}</p>`;
    results += `<p>Nejvyšší hod: <img src="img/kostka${(max(index))}.png" width="20"></p>`;
    results += `<p>Nejnižší hod: <img src="img/kostka${(min(index))}.png" width="20"></p>`;
    return results;
}
buttonj1.addEventListener("click", function () {
    jmeno1 = prompt("Zadej cele jmeno", "Hráč");
   console.log(`Zadané jméno je ${jmeno1}  `);
   document.getElementById('jmeno1').innerHTML = `<h1>${jmeno1}</h1>`;

})

buttonj2.addEventListener("click", function () {
    jmeno2 = prompt("Zadej cele jmeno", "Hráč");
   console.log(`Zadané jméno je ${jmeno2} `);
   document.getElementById('jmeno2').innerHTML = `<h1>${jmeno2}</h1>`;

})

playButton.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animation, 100);
    } else {
        clearInterval(timer);
        timer = false;
        rounds[0].push(turn[0]);
        rounds[1].push(turn[1]);
        result1.innerHTML = stats(0);   
        result2.innerHTML = stats(1);
    }
});

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("img/pngegg.png")) {
        image.src = "img/pngwing.png";
    }
    else {
        image.src = "img/pngegg.png";
    }
}
