const nameParts = "Anna Maria Lester";
const firstName = "Anna";
const middleName = "Maria";
const lastName = "Lester";

const indexOfFirst = nameParts.indexOf(firstName);
console.log(
  `The index of the first name "${firstName}" from the beginning is ${indexOfFirst}`
); /* the index of Anna is 0 because it is character number 0 (starts with 0) */

const indexOfSecond = nameParts.indexOf(middleName);
console.log(
  `The index of the 2nd name "${middleName}" is ${nameParts.indexOf(
    middleName,
    indexOfSecond
  )}`
); /* the index of maria is 5 because it is character number 5 with spaces */

const indexOfThird = nameParts.indexOf(lastName);
console.log(
  `The index of the 3rd name "${lastName}" is ${nameParts.indexOf(
    lastName,
    indexOfThird
  )}`
); /* the index of Lester is 11 because it is character number 11 with spaces */

const danielsName = "Daniel Bernhard Nielsen";
/* remember to include the spaces and that the strings first character is number 0  */
console.log(
  danielsName.substring(0, 6)
); /* we get Daniel in the console, because we ask for the information that is in character 0 to 6 in our string */
console.log(
  danielsName.substring(7, 15)
); /* we get Bernhard in the console, because we ask for the information that is in character 7 to 15 in our string */
console.log(
  danielsName.substring(16, 23)
); /* we get Daniel in the console, because we ask for the information that is in character 16 to 23 in our string */

console.log(danielsName);
console.log(firstName, middleName, lastName);
