// recupero la variabile con il container html dei miei nuemri cauali
const numContainer = document.querySelector(".num-container");

// creo l'array dove verranno inseriti i 5 numeri casuali generati
const randomNumArr = [];

// richiamo la funzione per gererare 5 numeri casuali da 1 a 100 e pusharli nell array
generateTotNumRandom(1, 100, 5, randomNumArr);

// creo un ciclo per estrapolare i singoli elementi dell'array e stamparli in pagina
for (let i = 0; i < randomNumArr.length; i++) {
  let risultato = randomNumArr[i];
  //   console.log(risultato);
  numContainer.innerHTML += `<span class="random-num">${risultato}</span>`;
}

// creo un timeout di 30 secondi dopo i quali scompaiono i numeri generati e chiedo all'utente tramite il prompt in che ordine erano i numeri
setTimeout(() => {
  // rendo invisibili i numeri dopo il tempo stimato
  numContainer.innerHTML = "";
  setTimeout(() => {
    // creo un array vuoto dove verranno inseriti i numeri scelti dall'utente
    let userNumbers = [];
    for (i = 1; i <= 5; i++) {
      let userInput = parseInt(
        prompt(`Inserisci il numero che era nella posizione: ${i}`)
      );
      userNumbers.push(userInput);
    }
    console.log(userNumbers);

    // Trovo i numeri indovinati
    let matches = findMatches(randomNumArr, userNumbers);
    console.log("Numeri indovinati:", matches);
    alert(`Hai indovinato ${matches.length} numeri: ${matches.join(", ")}`);

    // creo una variabile con dentro la funzione per il check degli array
    let arrayCheck = arrayCompare(randomNumArr, userNumbers);
    console.log(arrayCheck);

    // creo le condizioni dove se arraycheck è false l'user ha perso altrimenti ha vinto
    if (arrayCheck === false) {
      alert("HAI PERSO");
    } else {
      alert("HAI VINTO");
    }
  }, 1);
}, 30000);
