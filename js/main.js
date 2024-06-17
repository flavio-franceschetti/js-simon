// recupero la variabile con il container html dei miei nuemri cauali
const numContainer = document.querySelector(".num-container");

// creo l'array dove verranno inseriti i 5 numeri casuali generati
const randomNumArr = [];

// richiamo la funzione per gererare 5 numeri casuali da 1 a 100 e pusharli nell array
generateTotNumRandom(1, 100, 5, randomNumArr);

// creo un ciclo per estrapolare i singoli elementi dell'array e stamparli in pagina
for (let i = 0; i < randomNumArr.length; i++) {
  let risultato = randomNumArr[i];
  console.log(risultato);
  numContainer.innerHTML += `<span class="random-num">${risultato}</span>`;
}
