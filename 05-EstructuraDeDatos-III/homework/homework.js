'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function Nodo(data){
   this.data=data;
   this.hijoI=null;
   this.hijoD=null;
}
function BinarySearchTree() {
  this.root=null;
}

BinarySearchTree.prototype.insert=function(x){
  var node = new Nodo(x),
   actual = this.root;
  if(!padre){
     this.root=nodo;
     return nodo;
  }
  
  while(actual!=null){
    if(x<actual.data){
      
    }
  }

}

BinarySearchTree.prototype.contains=function(){}

BinarySearchTree.prototype.depthFirstForEach=function(){}

BinarySearchTree.prototype.breadthFirstForEach=function(){}

BinarySearchTree.prototype.size=function(){}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
