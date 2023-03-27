//function calling function

// const cutFruit = function(fruit){
//     const fruitPieces = fruit * 5;

//     return fruitPieces;
// }





// function foodProcessor(apple, orange){
//     const applePieces = cutFruit(apple);
//     const orangePieces = cutFruit(orange)
    
//     const juice = `My juice is made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

//     return juice;
// }

// console.log(foodProcessor(5, 3));//the juice is the result of the function that was called


//function Declaration vs function Expression
//Note: Functions are just values

 let currentYear = 2023;
// const retirementAge = 65;
//function declaration:
//Function declarations can be called before initialisation

// console.log(calcAge1(1982))// calcAge1() called before initialisation

// function calcAge1(birthYear){
//     const age = currentYear - birthYear
    
//     return age
// }

//function Expression: 
//Note: Expressions always return a value
// const calcAge2 = function (birthYear){
//     const age = currentYear - birthYear
    
//     return age
// }

// console.log(calcAge1(1982), calcAge2(1983));

//Arrow Functions

//Single expression
// const calcAge3 = birthYear => currentYear - birthYear;

// console.log(calcAge3(1984));

// //Block of codes
// const yearsUntilRetirement = (birthYear, firstName)=> {
    
//     const retirement = retirementAge - calcAge2(birthYear);

//     if(retirement>0){

//     return `${firstName} retires in ${retirement} year time!`;
//     }
//     else if(retirement<0){
//         return `${firstName} retired  ${-retirement} years ago!`
//     }
//     else{
//         return `${firstName} retires this year!`
//     }

// }

// console.log(yearsUntilRetirement(1958, 'Ola'));

//Data Structure

//Arrays

// function calcAge1(birthYear){
   
//     const age = currentYear - birthYear
    
//     return age
// }

// const years =[1990,1991,1992,1993,1994]

// for(i=0; i<years.length; i++){
    
//     console.log(calcAge1(years[i]))
//}


//Objects

const bioData = {
    firstName: 'Ola',
    lastName: 'Olawoyin',
    birthYear: 1982,
    job: 'QA Enginer',
    hasDriversLicense: !false,
    hobbies: ['Reading', 'Watching Football', 'Discussing politics'],
    calcAge: function (){
        this.age = currentYear - this.birthYear  
        return this.age
    },
    bioDataSumary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence`
    }
};


console.log(bioData.bioDataSumary())

//

//challenge : "Ola is a 41-year old QA Engineer and he has a/no drivers licence"





//Ola has 3 hobbies and his best hobby is reading

//console.log(`${bioData.firstName} has ${bioData.hobbies.length} hobbies and his best hobby is ${bioData.hobbies[0]}.📚`)