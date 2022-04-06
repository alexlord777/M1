

function nFibonacci(n){
    if(n==2 || n==1){
        return 1;
    }else{
        return nFibonacci(n-1)+ nFibonacci(n-2);
    }
}

let resultado=nFibonacci(6);

console.log(resultado);

class Stack{
    constructor(){
        this.stack=[];
    }

    quitar(){
       return this.stack.pop()
    }

     poner(x){
        this.stack.push(x);
     }
}


function myFunction(str){
  let arreglo =str.split('');
  let k='';

  for(let i=arreglo.length-3;i<arreglo.length;i++){
      k+=arreglo[i];
  }

  return k;
}

let palabra=myFunction('hola mundo');

console.log(palabra);

//funcion contructora y


function Queue() 
{
   this.queue=[];
   this.tam=0;

    this.dequeue=function(){
    let k;
     if(this.tam>=0){
      k=this.queue.shift();
      this.tam--;
     }
     return k;
   }

   this.enqueue=function(x){
    this.queue.push(x);
    this.tam++;
   }

   this.size=function(){
      return this.tam;
   }
}

const lol= new Queue();

//lol.enqueue('uno');
//lol.enqueue('dos');
//lol.enqueue('tres');

console.log(lol.dequeue());

function retornaLetra(str,x){
    let i= x-1;
    return str.charAt(i);
}

console.log(retornaLetra('abcd',1));


function arr(arr){
    let ar='';
    for(let i=0;i<3;i++){
       ar+=arr[i];
    }
    return ar;
}


console.log(arr('lolojkjkjjh'));

function myFunction(obj, key){

   return obj[key];
}

console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'));