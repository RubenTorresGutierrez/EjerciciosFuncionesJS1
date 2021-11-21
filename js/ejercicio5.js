/**
*   @file ejercicio5
*   @description Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let cantidad = (numero => numero.length);
let numero = 123456;

alert(`La cantidad de dígitos del número ${numero} es: ${cantidad(numero.toString())}`);