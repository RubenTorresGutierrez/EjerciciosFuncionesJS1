/**
*   @file ejercicio4
*   @description Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let perimetro = (l => l + l + l + l);
let lado = 9;

alert(`El perímetro de un cuadrado con lado ${lado} es: ${perimetro(lado)}`);