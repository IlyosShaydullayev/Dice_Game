const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');

const currentPlayer0 = document.querySelector('#current--0');
const currentPlayer1 = document.querySelector('#current--1');

const btnRestart = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');

let randomNumber = parseInt(Math.random() * 7);

// let start = 0;

btnRoll.addEventListener('click', () => {
    currentPlayer0.innerText = randomNumber
})