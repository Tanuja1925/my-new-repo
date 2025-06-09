/*
multi line comments
Data types:
1.Constants(const)
2.Variable(var)
3.Let(let)

const a = 10; //constant
cant reassign a new value to a constant if it is already assigned
in case if we try to reassign a new value to a constant it will throw an error

var b = 20;
function level Scope

let c = 30; 
let is block scoped
*/
//single line comment

// const a =10;
// console.log(a);
// // a=20;
// // console.log(a);
// var b=20;
// console.log(b);
// b=30;
// console.log(b);
// let c = 40;
// console.log(c);
// c = 50;
// console.log(c);

// //let is block scoped
// if(c==50){
//     let d = 60;
//     console.log(d);
//     console.log(d);
//     d=70;
//     console.log(d);
// }
// //console.log(d);

// if(c==50){
//     var e = 80;
//     console.log(e);
//     e=90;
//     console.log(e);
// }
// console.log(e);

//function declation in java script
// function chv(){
//     let num1=10;
//     let num2=20;
//     let sum = num1 + num2;
//     console.log("Addition of num1 and num2: " + sum);
// }
// chv();

function chv(){
    var num1=10;
    var num2=20;
    var sum = num1 + num2;
    if(sum > 20){
       let a =100;
       console.log(a);
       console.log(sum);
    }
   //console.log(a);
    console.log("Addition of num1 and num2: " + sum);
}
//console.log(sum)
//chv();

//loops in javascript
/*
types of loops:
1. for loop-syntax (initialization; condition; increment/decrement)
   for(initialization; condition; increment/decrement){
        //code to be executed
    }
    for(var i=0; i<10; i++){
        console.log(i);
    }
2. while loop
    while(condition){
          //code to be executed
     }
     var i=0;
     while(i<10){
          console.log(i);
          i++;
     }
3. do while loop
    do{
          //code to be executed
     }while(condition);
     var i=0;
     do{
          console.log(i);
          i++;
     }while(i<10);
4. for in loop
     var obj = {a: 1, b: 2, c: 3};
     for(var key in obj){
          console.log(key + ": " + obj[key]);
     }
5. for of loop
6. forEach loop
*/
//for exmaple program
console.log("FOR LOOP EXAMPLE");
for(var i=0; i<10; i++){
    console.log(i);
}

console.log("WHILE LOOP EXAMPLE");
 var i=0;
     while(i<10){
          console.log(i);
          i++;
     }
console.log("DO WHILE LOOP EXAMPLE");
    var i=0;
        do{
            console.log(i);
            i++;
           // console.log(i);
        }while(i<10);
