/**
 * Async Await
 */

//let getNombre = async() => {
//throw new Error('No existe un nombre para ese usuario');
//  return 'Nicolas';
//};

//esto sucede al agregar el async
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Nicolas');
        }, 3000);

    });
};


let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

//getNombre().then(nombre => {
//      console.log(nombre);
//})
//.catch(e => {
//  console.log('Error de ASYNC', e);
//})

saludo().then(mensaje => {
        console.log(mensaje);
    })
    //console.log(getNombre());