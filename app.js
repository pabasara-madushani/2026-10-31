console.log("Hello JavaScript!");

let name = "Saman";
console.log(typeof name);

name = 123;
console.log(typeof name);

{
    let city = "Walana";
    console.log( city);

}

{
 console.log(city);   
}

{
    var bike = "Yamaha";
}

console.log(bike);

//----------variable decleration---------------

//let name = "Saman";
//let age = 25;
//let isStudent = true;
//let cutomer = ["Saman",Kamal, "Nimal",1,true,100,00,4];

let customer = {
    name: "Saman",
    age: 25,
    isStudent: true,
}
console.log(customer.name);
console.log(customer.age);

class customer {
     name;
     age;
     isStudent;
}

constructor(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
}

let customer1 = new customer("Saman", 25, true);
console.log(customer1);

let customer2 = new customer("Kamal", 30, false);
console.log(customer2);