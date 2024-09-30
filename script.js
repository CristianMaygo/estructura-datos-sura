/* let nombre = 'cristian' */

/* let variasCosas = [1,'String', true, null, [2,3,4, ['Holis']], nombre]*/


/* console.log(variasCosas) */
/* console.log(variasCosas[4][3][0])


if(variasCosas[0] > 0){
    console.log('Este elemento es true')
}

console.log(variasCosas) */


/* let nombres = ['Carlos', 'Sebastian', 'Liliana', 'Isabela', 'Mateo', 'Yeris'] */

/* for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] == 'Isabela') {
        console.log(nombres[index] + ' existe en la base de datos')
    }    
} */


/* for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
    
}

for (let index = 0; index < nombres.length; index++) {
    nombres[index] = prompt('Ingrese un nombre: ')
    
}
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
} */



/* let nombres = ['Carlos', 'Sebastian', 'Liliana', 'Isabela', 'Mateo', 'Yeris']

let limite = nombres.length + 2

for (let index = nombres.length; index < 10; index++) {
    console.log(index)
    nombres[index] = prompt('Ingrese un nombre: ')
    
} */


    let nuevosNombres = []
    for(let index = 0; index < 10; index++){
        nuevosNombres[index] = prompt('Ingrese un nombre: ')
    }

    for (let index = 0; index < nuevosNombres.length; index++) {
        console.log(nuevosNombres[index])
        
    }