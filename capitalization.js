const nameCap = "anna";
console.log(
  nameCap.substring(0, 1)
); /* gives the first 'a' the one we want to capitalize */
const capA = nameCap.substring(0, 1);
console.log(
  capA.toUpperCase() + nameCap.substring(1, 4)
); /* here we capitalize the first A and then concatenate with the rest of the substring */
