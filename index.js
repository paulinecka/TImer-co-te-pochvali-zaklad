'use-strict';

// console.log(Date.now() / 1000);

const btnStartTime = document.querySelector('#startTime');

function cisloUzivatele() {
  const input = document.querySelector('#customNumber').value;
  console.log(input);
}

const beziciCas = null;

btnStartTime.addEventListener('click', () => {
  const countDown = Date.now() + 62000;
  beziciCas = setInterval(() => {
    myTimer(countDown);
  }, 1000);
});

function myTimer(countDown) {
  const now = Date.now();
  const distance = countDown - now;

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(
    '#odpocet',
  ).innerHTML = `Zbývá času: ${minutes}m ${seconds}s`;

  if (distance <= 0) {
    clearInterval(beziciCas);
    document.querySelector('#odpocet').innerHTML =
      'Ukončeno - čas na přestávku';
  }
}

//console.log((Date.now() % (1000 * 60 * 60)) / (1000 * 60));
//console.log(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
//new Date().getTime();

/*
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDown - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(
    '#odpocet',
  ).innerHTML = `${hours}h ${minutes}m ${seconds}s`;

  if (distance <= 0) {
    clearInterval(timer);
    document.querySelector('#odpocet').innerHTML = 'ukonceno';
  }
});

*/
