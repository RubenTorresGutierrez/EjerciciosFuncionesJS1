/**
*   @file ejercicio1
*   @description Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let menor = function (a, b, c){

    if(a < b && a < c)
        return a;
    if(b < a && b < c)
        return b;
    if(c < a && c < b)
        return c;

}

alert(`El menor es ${menor(1, 2, 3)}`);