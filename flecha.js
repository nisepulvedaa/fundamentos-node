//function sumar(a, b) {
//  return a + b;
//}

//let sumar = (a, b) => a + b

//console.log(10 + 20);

//function saludar(){
//  return 'Hola Mundo';
//}

//let saludar = () => 'Hola Mundo';

//console.log(saludar());

//function saludar(nombre) {
//  return `Hola ${nombre}`;
//}

//let saludar = (nombre) => `Hola ${nombre}`;


//console.log(saludar('Nicolas'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}
console.log(deadpool.getNombre());