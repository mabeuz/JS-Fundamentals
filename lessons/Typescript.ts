var customerFirstName = "John"
var customerLastName: string = "Smith"
var customerAge = 25

//Strict typing - when a variable is assigned, the type is assigned and can't be changed

type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Belen", 
    lastName: "Uzeltinger",
    active: true
}

// try to control the variables strictly