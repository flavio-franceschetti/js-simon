// funzione genera numero random
function randomNum(min, max) {
  let randomNumGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumGenerate;
}

// ciclo per creare numeri random tot volte e pusharli in un array
function generateTotNumRandom(min, max, howMuch, arrayName) {
  while (arrayName.length < howMuch) {
    let risultato = randomNum(min, max);

    if (!arrayName.includes(risultato)) {
      arrayName.push(risultato);
    }
  }
  console.log(arrayName);
}
