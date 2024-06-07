// let button = document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);

// q1
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Tushar Dubey";

// let divs = document.querySelectorAll(".myClass");
// // divs[1].innerText = "new text";
// let idx = 0;
// for (div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx ++;
// }

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));
// divs[1].style.backgroundColor = "green";
// divs[2].style.fontSize = "26px";

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// btn1.addEventListener("Click", (evt) => {
//     console.log("Button was clicked");
//     console.log(evt.type);
// });
// btn1.addEventListener("Click",() => {
//     console.log("Button was clicked - handler 1");
// });

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside div");
// }

// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body")
// let currMode = "light";
// modebtn.addEventListener("click", () => {
//     if (currMode === "light"){
//         currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
    //     body.classList.add("dark");
    //     body.classList.remove("light");
    // } else {
    //     currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

// oops
// classes
class ToyotaCar{
    constructor(brand,mileage){
        console.log("Creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    // setBrand(brand){
    //     this.brand = brand;
    // }
}
let Fortuner = new ToyotaCar("Fortuner",25);
// Fortuner.setBrand("Toyota");
console.log(Fortuner);
let Lexus = new ToyotaCar("Lexus",20);
console.log(Lexus);
// Lexus.setBrand("Toyota");
// this are used for making multiple object on same template

// inheritance
// class Person{
//     constructor(){
//         this.species = "Homo Sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engineer extends Person {
//     work(){
//         console.log("Solve problems, build something");
//     }
// }
// let tusharObj = new Engineer ();
// if child and parent class has the same fuction the child class funct will be invoked - method overwriting

// superkeywords
class Person{
    constructor(naam){
        this.species = "Homo Sapiens";
        this.naam = naam;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person {
    constructor(naam){
        super (naam); //to invoke parent class constructor
    }
    work(){
        super.eat()
        console.log("Solve problems, build something");
    }
}
let engObj = new Engineer ("Tushar");

// q1
let DATA = "secret info";
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    veiwData(){
        console.log("data =", DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData() {
        DATA = "Some new data";
    }
}
let Student1 = new User("Tushar","abc@gmail.com");
let Student2 = new User("Tushy","xyz@email.com");
let admin1 = new User("admin","admin@college.edu.in");

// try-catch err
let a = 12;
let b = 13;
console.log("a =",a);
console.log("b =",b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);
try {
    console.log("a+b =", a+c);
}catch (err){
    console.log(err);
}

console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);

