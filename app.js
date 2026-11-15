//console.log("Hello JavaScript!");

//let name = "Saman";
//console.log(typeof name);

//name = 123;
//console.log(typeof name);

//{
//let city = "Walana";
//console.log( city);

//}

//{
//console.log(city);   
//}

//{
//var bike = "Yamaha";
//}

//console.log(bike);

//----------variable decleration---------------

//let name = "Saman";
//let age = 25;
//let isStudent = true;
//let cutomer = ["Saman",Kamal, "Nimal",1,true,100,00,4];


//recommended
//let customer = {
//name: "Saman",
//age: 25,
//isStudent: true,
//}
//console.log(customer);

//console.log(customer.name);
//console.log(customer.age);

//class customer {
//name;
//age;
//isStudent;
//}

//constructor(name, age, isStudent) {
//this.name = name;
// this.age = age;
//this.isStudent = isStudent;
//}

//let customer1 = new customer("Saman", 25, true);
//console.log(customer1);

//let customer2 = new customer("Kamal", 30, false);
//console.log(customer2);

//console.log(name);
//console.log(cutomer);

//inside arrays define objects


// inside arrays define objects

//let student = [
//{
//  name: "Saman",
//age: 25,
//isStudent: true,
//marks: [
// {
//  subject: "Math",
//  score: 80
//},
// {
//subject: "Science",
//score: 85
//}
//]
//},
//{
// name: "Kamal",
//age: 30,
//isStudent: false
//}
//];

//console.log(student);
//console.log(student[1].age);
//console.log(student[0].marks[1].mark);

//-----------Arithmetic Operators----------------

// + | - | * | / | %
//let a = 10;

//console.log(a++);
//console.log(avg++);


//let b = 3;

//let sum = a + b;
//console.log(sum);

//-----------Comparison Operators----------------

//== | === | != | !== | > | < | >= | <=
// == - does not check the data type
// === - checks the data type

//let x = 10;
//let y = "10";

//console.log(x == y);
//console.log(x === y);

//-----------Logical Operators----------------

// && | || | !

//if (false || false) {
//   console.log("Working");
//}else {
//   console.log("Not Working");
//}

//-----------If else ----------------

//let x = 10;
//let y = 20;

//if (x > y) {
//   console.log("X is greater than Y");
//}else {
// console.log("x is less than Y");
//}

//mark = 10;
//if (mark >= 90) {
//  console.log("A+");
//}else if (mark >= 75) {
//  console.log("B");
//}else if (mark >= 65) {
//  console.log("C");
//}else if (mark >= 50) {
//  console.log("D");
//}else {
//  console.log("F");
//}

//-----------Switch case statement----------------

//let day = 1;

//switch (day) {
//case 1:
//console.log("Monday");
//break;
//case 2:
//console.log("Tuesday");
// break;
//case 3:
//console.log("Wednesday");
//break;
//case 4:
//console.log("Thursday");
//break;
//case 5:
// console.log("Friday");
// break;
//case 6:
//console.log("Saturday");
//break;
//case 7:
//console.log("Sunday");
//break;
//default:
//console.log("Invalid day");
//break;
//}

//-----------For loop----------------

//for (let i = 0; i < 5; i++) {
//   console.log(i);
//}

//-----------While loop----------------

//let i = 0;
//while (i < 5) {
//  console.log(i);
//  i++;
//}

//console.log("------------------------------------");

//let k = 0;
//while (k < 5) {
//  console.log(k);
//  k++;
//}

//console.log("------------------------------------");

//-----------Do while loop----------------

//let j = 0;

//do {
  //console.log(j);
  //j++;
//}
//while (j < 5);

//console.log("------------------------------------");

//let p = 0;
//do {
//  console.log(p);
//  p++;
//}
//while (p < 5);

//----------Function----------------

//normal function
function myFunction() {
  console.log("hello world ");
}
myFunction();

//function with parameters
function getSum(num1, num2) {
  return  num1 + num2;
}
console.log(getSum(10, 20));