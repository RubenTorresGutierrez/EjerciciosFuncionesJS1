/**
*   @file ejercicio7
*   @description Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let suma = (numeros => numeros.reduce((x, y) => x + y));
let numeros = [];

for(let i = 0; i < 5; i++)
    numeros[i] = parseInt(prompt(`Introduce el número ${i+1}:`));

alert(`La suma de todos los elementos es ${suma(numeros)}`);