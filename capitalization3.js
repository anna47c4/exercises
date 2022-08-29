const nameCap = "Anna";
console.log(
  nameCap.substring(2, 3)
); /* gives 'n' the one we want to capitalize */
const capN = nameCap.substring(2, 3);
console.log(capN.toUpperCase()); /* here we capitalize the n -> N */

console.log(
  `An` + capN.toUpperCase() + `a`
); /* here we do a concetanation and put the name together with the capitalized letter placed as the third */

const nameCap2 = "Dumbledore";
console.log(nameCap2.substring(2, 3));

const capM = nameCap2.substring(2, 3);
console.log(capM.toUpperCase());
console.log(`Du` + capM.toUpperCase() + `bledore`);
