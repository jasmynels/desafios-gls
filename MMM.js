const arr = [0, 40, 0, 22, 3, 22, 0, 40, 8, 77, 22, 22, 34];
const arr2 = [0, 40, 10, 50, 10, 22, 15];
let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

let repetidos = [];

function moda(arr) {
  let rep = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) {
          rep.push(arr[i]);
        }
      }
    }
  }

  let teste = {};
  for (let k = 0; k < rep.length; k++) {
    let contador = 0;
    for (let j = 0; j < rep.length; j++) {
      if (k != j) {
        if (rep[k] == rep[j]) {
          contador++;
          teste[`${rep[k]}`] = contador;
        }
      }
    }
  }
  let moda = 0;
  for (let i = 0; i < Object.keys(teste).length; i++) {
    let inicio = teste[Object.keys(teste)[0]];
    if (teste[Object.keys(teste)[i]] > inicio) {
      console.log(Object.keys(teste)[i]);
      moda = Object.keys(teste)[i];
    }
  }
return moda;
  console.log(moda);
}

function mediana(arr) {
  // Organizar os números em ordem crescente
  arr.sort(function (a, b) {
    return a - b;
  });

  var tamanho = arr.length;
  var mediana;

  if (tamanho % 2 === 0) {
    var indice1 = tamanho / 2 - 1;
    var indice2 = tamanho / 2;
    mediana = (arr[indice1] + arr[indice2]) / 2;
  } else {
    var indice = Math.floor(tamanho / 2);
    mediana = arr[indice];
  }

  return mediana;
  console.log(mediana);
}

moda(arr);
const media = total / arr.length;
console.log({ moda: moda(arr), media: parseInt(media), mediana: mediana(arr) });

