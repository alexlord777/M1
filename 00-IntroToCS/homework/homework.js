'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let n= String(num).split('').reverse();

  let p=n.map((x,i)=> x*Math.pow(2,i));
  let numroDecimal= p.reduce((acumulado,numero)=> acumulado+numero);

  return numroDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let resultado=num;
  let numeroBinario=''; 
  while(resultado>=1)
  {
     let modulo=resultado%2;
     resultado= Math.floor(resultado/2);

     numeroBinario+=modulo;
  }
  return numeroBinario.split("").reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}