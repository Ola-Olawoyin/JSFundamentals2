function foodProcessor(apple, orange){
    const juice = `My juice is made with ${apple} apples and ${orange} oranges`;

    return juice;
}

console.log(foodProcessor(5, 3));//the juice is the result of the function that was called


//function Declaration vs function Expression
//Note: Functions are just values

let currentYear = 2023;
const retirementAge = 65;
//function declaration:
//Function declarations can be called before initialisation

console.log(calcAge1(1982))// calcAge1() called before initialisation

function calcAge1(birthYear){
    const age = currentYear - birthYear
    
    return age
}

//function Expression: 
//Note: Expressions always return a value
const calcAge2 = function (birthYear){
    const age = currentYear - birthYear
    
    return age
}

console.log(calcAge1(1982), calcAge2(1983));

//Arrow Functions

//Single expression
const calcAge3 = birthYear => currentYear - birthYear;

console.log(calcAge3(1984));

//Block of codes
const yearsUntilRetirement = (birthYear, firstName)=> {
    
    const retirement = retirementAge - calcAge2(1982);

    return `${firstName} retires in ${retirement} year time!`;
}

console.log(yearsUntilRetirement(1982, 'Ola'));