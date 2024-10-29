
function largo(palabra){
  return palabra.length
}

console.log('cesar tiene '+largo('cesar')+' palabras')

function reversa(palabra){
  var nuevo =''
  for (var x = palabra.length - 1; x >= 0; x--){
    nuevo +=palabra[x];
  };
  return nuevo;
};

console.log('el reverso de cesar es '+reversa('cesar'))

function palindromo(palabra){
  for (let x = 1; x < palabra.length/2;x++){
    if (palabra[x-1] != palabra[palabra.length-x]){
      return 'no es un palindromo';
    }
  }
  return 'es un palindromo'
}

console.log('la palabra cesar '+palindromo('cesar'))
console.log('la palabra rapar '+palindromo('rapar'))
console.log('la palabra ana '+palindromo('ana'))