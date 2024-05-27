// logical "AND"

console.log(true && true)

// Logical "OR"
console.log(true || false) // ansy value should be true for the expression to be true

var ageIsMoreThan18 = false
var isUSCitizen = true

var eligibilityForDriverLicense = ageIsMoreThan18 && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriverLicense)

// Logical "NOT"
console.log(!true)
console.log(6 !== 10)