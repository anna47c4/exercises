"use strict";

const longLine =
  "a very very very very very very very long line of text, that spans across the width of the editor, \
omg what to do!!!! this is a bit annoying"; /* the backslash makes a line break in the editor */
console.log(longLine);

const longLine2 =
  "a very very very very very very very long line of text, that spans across the width of the editor, \n \
omg what to do!!!! this is a bit annoying"; /* the backslash x 2 with n in the middle makes a line break in the text, browser as well */
console.log(longLine2);

const longLine3 =
  "a very very very very very very very long line of text, that spans across the width of the editor, \nomg what to do!!!! this is a bit annoying"; /* the backslash x 1 with n afterwards makes a line break in the string(text), not in the editor(here) */
console.log(longLine3);

/* Template literals */
const name = "Peter";
const drink = "Pepsi";

console.log(`Hello ${name}, would you like a ${drink}?`);
/* ${valuable} inserts the value of the variable into the string */

/* with the back-tick, the line break is the same in the editor and in the browser */
/* you can use spaces, linebreaks etc. to layout the text inside the backticks  */

/* it could also be done with classic concatenation */
console.log("Hello " + name + ", would you like a " + drink + "?");

/* the template literals exercises is continued in the template files in this folder */
