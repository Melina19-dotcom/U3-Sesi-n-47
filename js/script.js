class Stack{
    constructor(){
        this.items = []; // caracteristicas
    }
    //agregar habilidades
    push(element){//Agrega elementos
        this.items.push(element);
    }
    pop(){//Elimina elementos
        if(this.isEmpty()){
            return "La pila está vacía"
        }
        return this.items.pop();
    }
    peek(){//Mostrar el último elemento 
        if(this.isEmpty()){
            return "La pila está vacía"
        }
        return this.items[this.items.length - 1];
    }
    isEmpty(){//Verificamos si la pila está vacía
        return this.items.length === 0;
    }
    size(){//Número de elementos en la pila
        return this.items.length;
    }
    print(){//Mostrar elementos de la pila
        console.log(this.items);
    }
}
// push, pop, peek, isEmpty, size, print son acciones que actuan como funciones.
/*
EJEMPLO: Pablo jugo ayer en el patio, él tiene 9 años
 */

//para iniciar una clase
const animales = new Stack();

//CREANDO CLASE COLAS
class Queue{
    constructor(){
        this.items = [];
    }
    //Añadir un elemento
    agregar(elemento){
        this.items.push(elemento);
    }
    //Eliminar el primer elemento
    eliminar(){
        if(this.isEmpty()){
            return "La cola está vacía"
        }
        return this.items.shift();
    }
    //mostrar el primer elemento
    front(){
        if(this.isEmpty()){
            return "La cola está vacía"
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
}

const paises = new Queue();

//creando árbol
class TreeNode{
    constructor(nodo){
        this.nodo = nodo;
        this.descendientes = [];
    }
}

const a = new TreeNode(1000000);
const b = new TreeNode(95);
const c = new TreeNode(100);
const d = new TreeNode(50);
const e = new TreeNode(19);

//creando una matriz
const matriz = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
];

//ejercicio: Crea una matriz de 2x2
const matriz1 = [
    ["Adele","Taylor"],
    ["Mana","Hombres G"]
];