// recupero la variabile con il container html dei miei nuemri cauali
const numContainer = document.querySelector(".num-container");

// creo l'array dove verranno inseriti i 5 numeri casuali generati
const randomNumArr = [];

// richiamo l'elemento html timer per inserire e rendere visibile il tempo rimanente prima che i numeri spariscano
const timerContainer = document.querySelector(".timer");

// dichiaro la variabile dello start del timer dato che lo voglio far andare al contrario partirò da 30
let countdownTimer = 30;

// recupero il container per gli input dell'utente in pagina
let userInputContainer = document.querySelector(".user-input-container");

// bottone per l'invio dei numeri inseriti dall'utente
let sendButton = document.getElementById("invia");

// recupero l'elemento per inserire il risultato nell'html
let result = document.querySelector(".risultato");

// richiamo la funzione per gererare 5 numeri casuali da 1 a 100 e pusharli nell array
generateTotNumRandom(1, 100, 5, randomNumArr);

// creo un ciclo per estrapolare i singoli elementi dell'array e stamparli in pagina
for (let i = 0; i < randomNumArr.length; i++) {
  let risultato = randomNumArr[i];
  //   console.log(risultato);
  numContainer.innerHTML += `<span class="random-num">${risultato}</span>`;
}

// creo la variabile con il countdown dentro
let countdown = setInterval(() => {
  countdownTimer--;
  timerContainer.innerHTML = `Tempo rimanente: ${countdownTimer}`;
}, 1000);

// creo un timeout di 30 secondi dopo i quali scompaiono i numeri generati e chiedo all'utente tramite il prompt in che ordine erano i numeri
// ho creato due set timeout per essere sicuro che il brower faccia sparire i numeri prima di generare il prompt
setTimeout(() => {
  // rendo invisibili i numeri dopo il tempo stimato
  numContainer.innerHTML = "";
  clearInterval(countdown);
}, 3000);

setTimeout(() => {
  // creo un array vuoto dove verranno inseriti i numeri scelti dall'utente
  let userNumbers = [];
  // creo un event listener sul bottone una volta inseriti i numeri li invia nell'array userNumbers
  sendButton.addEventListener("click", function () {
    event.preventDefault();
    // seleziono tutti gli input per l'inserimento dei numeri e il bottone per l'invioo
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);
    // i numeri inseriti dall'utente negli input viene pushato nell'array userNumbers
    userNumbers.push(num1, num2, num3, num4, num5);
    console.log(userNumbers);

    // creo un array per i numeri controllati
    const checkedNum = [];
    // creo un ciclo dove vado a ciclare i valori inseriti dall'user e controllo se sono inclusi nell'array dei numeri casuali se si li pusho nel nuovo array dei numeri con il check
    for (let i = 0; i < userNumbers.length; i++) {
      if (randomNumArr.includes(userNumbers[i])) {
        checkedNum.push(userNumbers[i]);
      }
    }
    console.log(checkedNum);

    // con questo ciclo tiro fuori i valori del nuovo array dei numeri che sono stati indovinati e metto nell'elemento html del risultato la quantità di numeri indovinati e quali numeri sono stati indovinati
    for (let i = 0; i < checkedNum.length; i++) {
      result.innerHTML = `Hai indovinato ${checkedNum.length} e sono ${checkedNum[i]}`;
    }
  });
}, 3100);
