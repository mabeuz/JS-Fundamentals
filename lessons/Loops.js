// Loops

//for (statement1; statement2; statement3 ){ //1- what to start the loop with; 2- How long we want to run the loop and we to stop it; 3- What need to do after each cycle of the loop

//}

// For i loop
for (let i=0; i<5; i++){
    console.log("Hello world! " + i)
}

var cars =  ["Volvo", "Toyota", "Tesla"]

// For of loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})