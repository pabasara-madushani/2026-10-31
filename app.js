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
    {
        name: "Saman",
        age: 25,
        isStudent: true,
        marks: [
            {
                subject: "Math",
                score: 80
            },
            {
                subject: "Science",
                score: 85
            }
        ]
    },
    {
        name: "Kamal",
        age: 30,
        isStudent: false
    }
];

console.log(student);
console.log(student[1].age);
console.log(student[0].marks[1].mark);