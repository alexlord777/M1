// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

/* 
function LinkedList() {
    this._length = 0;
    this.head = null;
  }
  
  LinkedList.prototype.add=function(data){
    var node = new Node(data),
    current = this.head;
    // Si está vacia
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current) {
        
    }
    current.next = node;
    this._length++;
    return node;
  };
  
  LinkedList.prototype.remove = function () {
    let current = this.head;
    if (!current) {
      // console.log('vacia;');
      return null;
    }

    while (current.next) {
        current = current.next;
    }
     
    let lol=current.value

    current=null;

    console.log('');
     return lol;
  };
  
  let l1= new LinkedList();
  
  l1.add(1);
  l1.add(2);
  l1.add(3);

  
  
  console.log(l1.remove());
  console.log(l1.remove());
  console.log(l1.remove());

  

  LinkedList.prototype.search=function(){}

function Node(value){
  this.value = value;
  this.next = null;
}


*/
// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function Nodo(data) {
  this.data = data;
  this.hijoI = null;
  this.hijoD = null;
}
function BinarySearchTree() {
  this.root = null;
  this.contador = 0;
}

BinarySearchTree.prototype.insert = function (x) {
  var nodo = new Nodo(x),
    actual = this.root;
  if (!actual) {
    this.root = nodo;
    console.log(`raiz ${nodo.data}`);
    return nodo;
  }

  while (actual != null) {
    if (x >= actual.data) {
      actual = actual.hijoD
      console.log('es mayor');
      this.contador++;
    } else {
      actual = actual.hijoI;
      console.log('es menor');
      this.contador++;
    }
  }

  actual = nodo;

  return actual.data;;
}

BinarySearchTree.prototype.contains = function () { }

BinarySearchTree.prototype.depthFirstForEach = function () { }

BinarySearchTree.prototype.breadthFirstForEach = function () { }

BinarySearchTree.prototype.size = function () { };

let arbol1 = new BinarySearchTree();





function esPrimo(num){
   for(let i=2;i<num;i++){
     if(num%i==0){
       return false;
     }
   }

   return true;
}

console.log(4%2);

console.log(esPrimo(4));
function factorizador(num)
{
  let divisor=2;
  let array=[];
  while(num !=1)
  {
    if(esPrimo(divisor) && num%divisor==0)
    {
        
    }
  }
}

factorizador(180);
