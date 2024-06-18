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
  // console.log(arrayName);
}

// funzione per comparare gli array fra di loro e vedere se sono stati inseriti gli stessi valori
function arrayCompare(_arr1, _arr2) {
  // se array 1 e array 2 non sono degli array e se la loro lungheza non è uguale mi ritorna falso
  if (
    !Array.isArray(_arr1) ||
    !Array.isArray(_arr2) ||
    _arr1.length !== _arr2.length
  ) {
    return false;
  }
  // variabili per ordinare gli array con concat unisco tutti i valori dell'array e con sort li metto in ordine
  const arr1 = _arr1.concat().sort();
  const arr2 = _arr2.concat().sort();

  //ciclo per fare il check dei valori degli array da comparare
  for (let i = 0; i < arr1.length; i++) {
    // se i valori dell array 1 sono diversi dai valori dell'array 2 allora la funzione mi ritorna falso
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // se tutte le condizioni sopra sono passate allora la funzione mi ritornerà un true
  return true;
}

// funzione per trovare i numeri che sono stati indovinati
function findMatches(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
