const dice = document.getElementById('dice');
const playButton = document.getElementById('play');
const result = document.getElementById('result');
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
    //player1.style.left = `${sum(0) * 10}px`;
    //player2.style.left = `${sum(1) * 10}px`;
    let results = `<h3 class="text-center">PLAYER ${index+1}</h3>`;
    results +=  `<p>Aktuální hod: ${turn[index]}</p>`;
    results += `<p>Hody: ${rounds[index]}</p>`;
    results += `<p>Počet hodů: ${rounds[index].length}</p>`;
    results += `<p>Součet hodů: ${sum(index)}</p>`;
    results += `<p>Průměr hodů: ${(sum(index)/rounds[index].length).toFixed(2)}</p>`;
    results += `<p>Nejvyšší hod: <img src="img/kostka${(max(index))}.png" width="20"></p>`;
    results += `<p>Nejnižší hod: <img src="img/kostka${(min(index))}.png" width="20"></p>`;
    return results;
}

playButton.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animation, 100);
        playButton.src="img/dice-roll.gif";
    } else {
        clearInterval(timer);
        timer = false;
        playButton.src="img/dice-roll.gif";
        rounds[0].push(turn[0]);
        rounds[1].push(turn[1]);
        result1.innerHTML = stats(0);
        result2.innerHTML = stats(1);
    }
});