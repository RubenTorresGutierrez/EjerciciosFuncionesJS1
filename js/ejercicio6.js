/**
*   @file ejercicio6
*   @description Elaborar una función que reciba tres enteros y retorne el promedio.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let promedio = ((a, b, c) => (a + b + c) / 3);

alert(`El promedio es: ${promedio(1, 2, 3)}`);