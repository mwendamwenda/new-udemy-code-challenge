// // /*let js = "amazing";
// // console.log(40 + 8 + 23 - 10);


// // let firstName = "mwenda";//variable declaration firstName is the variable while "mwenda is the value"
// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);
// // */

// // // let javascriptIsFun = true;
// // // console.log(javascriptIsFun);

// // const now = 2022;
// // const benAge = now - 1992;
// // const tokitiAge = now - 1999;
// // console.log(benAge, tokitiAge);
// // console.log(benAge * 2,benAge / 2, benAge ** 2)

// // // const newName = "munene";
// // // const nextName = "mwebia";
// // // console.log(newName + ' ' + nextName);
// // let x = 10 + 5;
// // x += 10;
// // console.log(x);
// // console.log(benAge < tokitiAge);

// // let  markWeight = 78;
// // let  johnWeight = 92;
// // let  markHeight = 1.69;
// // let  johnHeight = 1.95;
// // const markBmi = ( markWeight/(markHeight **2));
// // console.log(markBmi);
// // const johnBmi = (johnWeight / (johnHeight **2));
// // console.log(markBmi > johnBmi);

// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 85;
// const johnHeight = 1.76;

// const BMIMark = markWeight / markHeight **2;
// const BMIJohn = johnWeight / johnHeight **2;
// console.log(BMIJohn, BMIMark);
// const markHigherBMI = BMIMark < BMIJohn;
// console.log(markHigherBMI);
const myName = 'kariuki';
const job = 'engineer';
const yearOfBirth = 1992;
const year = 2022;
const kariuki = "I'm"  + " "+ myName + ', a'+" " +  "  "+ (year - yearOfBirth) + " "+ job;
console.log(kariuki);
//template literals
const newKariuki = `i am ${myName} ${(year - yearOfBirth)} years old  ${job}!`;
console.log(newKariuki);
//backticks to create a multi lines
console.log(`kenya
is a new 
oreder
country
`)