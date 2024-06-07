// console.log("hello JS");
// let fullName= "Tony stark" ;
// console.log(fullName);
// {
//     let a = 10;
//     console.log(a);
// }
// {
//     let a = 5;
//     console.log(a);
// }
const Student={
    fullName: "Rahul kumar",
    age: 24,
    cgps: 8.4,
    isPass: true
};
Student ["age"] = Student ["age"] + 1;
console.log(Student["age"]);
Student ["fullName"] = "Rahul Sharma";
console.log(Student["fullName"]);
const Product={
    fullName: "Parker Jotter Standard CT ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};
const profile={
    username: "@tushardubey",
    following: 345,
    followers: 4,
    isFollow: true,
    post: 234,
};

// arthemetic operators in JS
// let a=5;
// let b=2;

// console.log("a=",a, "& b=",b);
// console.log("a+b=", a+b);
// console.log("a-b=", a-b);
// console.log("a*b=", a*b);
// console.log("a/b=", a/b);
// console.log("a%b=", a%b);
// console.log("a**b=", a**b);

// unary operator
// a++;
// console.log("a=", a);
// b--;
// console.log("b=", b);
// Assingment operator
// let a = 5;
// let b = 4;
// a += 4;
// console.log("a = ",a);

// Comparison operator
// let a = 5; 
// let b = "5";
// console.log("a === b", a === b); //not ke liye !

// logical operator
let a = 6;
let b = 5;
let cond1 = a < b;
let cond2 = a === 6;
console.log("cond1 && cond2 =", cond1 && cond2);

let c = 6;
let d = 5;
let cond3 = a > b;
let cond4 = a === 6;
console.log("cond3 || cond4 =", cond3 || cond4);

// conditional statement
let age = 16;
if (age > 18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}
let color;
let mode = "light";
if(mode === "dark"){
    color = "black";
}
else{
    color = "white";
}
// console.log(color);

let num=11;
if(num % 2 === 0){
    console.log(num, "is even no");
}
else{
    console.log(num, "is odd no");
}
 
let e=20;
let f=15;
let g=1;
if(e > f && e > g){
    console.log(e, "is the greater number");
}
else if(f > e && f > g){
    console.log(f, "is the greater no");
}
else{
    console.log(g, "is the greater no");
}

let umar = 28;
let result = umar >= 18 ? "adult" : "not adult";
console.log(result);

// question
// let output=prompt("Enter a number :");
// if( output % 5 === 0){
//     console.log(output, "is multiple of 5");
// }
// else{
//     console.log(output, "is not a multiple of 5");
// }

// loops
let sum=0;
for( let i=1; i<=5; i++){
    sum = sum + i;
} 
console.log("sum =",sum);
// variables loop tak hi rehte hai. agar var use kiya toh loop ke bahar bhi ek value increment hoga
 
let j=1;
while(j <= 5){
    console.log("tushar");
    j++;
}

let k=20;
do{
    console.log("tushar");
    k++;
}while( k <= 5);
// do-while loop ek baar chalega 

// for-of loop
let str = "Javascript";
let size=0;
for(let i of str){   // i is the iterator which stores the characters. 
    console.log("i=",i);
    size ++;
}
console.log("string size =",size);

// for-in loop
let officer ={
    name:"Tushar dubey",
    age: 30,
    rank: 5,
};
for (let key in officer){
    console.log("key=",key, "value=", officer[key]);
}

// q1
// let gameNum=30;
// let userNum = prompt("Guess the number :");
// while (userNum != gameNum){
//     userNum = prompt("you entered the wrong number. Please try again :");
// }
// console.log("Congratulation, you entered the right number");

// Strings
let str2 = "Tushardubey";
console.log(str2[5]);

// Template literals
let specialstring=`This is a template literal ${1+2+3}`;
console.log(specialstring);

let obj={
    item: "pencil",
    price: 5,
};
// console.log("the cost of",obj.item,"is",obj.price,"rupees");
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let str3="tushardubey";
str3=str3.toUpperCase();
console.log(str3);

let str4="   u c o e  ";
console.log(str4.trim());
let str5= "Hello";
console.log(str5.slice(1)); //starting number batana padta hai.

let str6 = "dubey";
let str7 = "Honewali";
let res=str6.concat(str7); //or + bhi likh sakte ho
console.log(res);

let str8 = "hello";
console.log(str8.replace("lo","p")); //if lo jyada baar hai toh replaceAll

let str9 = "Ilovejs";
console.log(str9.charAt(3));
// strings are immutable methods ko use karna padega changes karne ke liye

// q1
// let fullName = prompt("enter your fullname without spaces");
// let username = "@" + fullName + fullName.length;
// console.log(username);

// arrays are mutable
// let marks = [89,94,55,66,78];
// console.log(marks);
// let names = ["TUshar","dubey","koi toh"];
// console.log(names);
// marks[2]=45;

// loops in array
let cities = ["delhi","mumbai","pune"];
for(let city of cities){
    console.log(city.toUpperCase());
    // console.log(city);
}
// q1
let marks = [85,97,44,37,76,60];
let total = 0;
for(let val of marks){
    total = total + val;
}
let avg = total / marks.length;
console.log(`Avg marks = ${avg}`);

let items = [250,300,450,50];
for(i = 0;i < items.length; i++){
    let offer = items[i] / 10;
    items [i] -= offer;
}
console.log(items);

// arrays method
// push ()
// pop ()
// to string()
// unshift()
// shift ()
let marvelHeroes = ["Spiderman","Ironman","Captian","Thor","Hulk"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(0,3));

let dcHeroes = ["Superman" , "batman" ,"Wonder","Flash","Deadpool","Starlight","Homelander","Butcher" ];
dcHeroes.splice(4,1,"Soldier boy");

// function
function myFunction(msg){
    // parameter -> input
    console.log(msg);
}
myFunction("I love JS");

function add(x,y){
    s = x + y;
    return s;
}
let val = add(4,6);
console.log(val);
// fix parameter -> like local variable of function -> Block surface

// arrow function 
const arrowMultiplication = (m,n) =>{
    console.log(m * n);
};

// q`1
function countVowel(str){
    let count=0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count ++;
        }
    }
    console.log(count);
}

// foreach loop
let arr = ["pune","mumbai","delhi"];
arr.forEach((val) => {
    console.log(val.toUpperCase());
}
)
// it is a higher order funct/method because it uses other funct as parameter or return any function

// q1
// let nums = [1,12,43,55];
// nums.forEach((no) => {
//     console.log(no * no);
// }
// )
//  Array method
//  map method
let nums = [1,12,43,55];
let newArr = nums.map((val) => {
    return val *2;
})
console.log(newArr);

// filter
let simarr = [1,2,3,4,5,6,7,8];
let evenArr = simarr.filter((val) => {
    return val % 2 === 0;
}
);
console.log(evenArr);

// reduce
// let somearr =[1,2,3,4];
// const outcome = somearr.reduce((res , curr) => {
//     // return res+curr ;
//     return res > curr ? res : curr;
// });
// console.log(outcome);

// q1
let mark = [45,77,88,99,96,90,85];
let ninetyPlus = mark.filter ((val) => {
    return val>=90;
});
console.log(ninetyPlus);
//  q2
let u=prompt ("enter a number:");
let arrey = [];
for (let i=1; i<=u; i++){
arrey[i-1] = i;
}
console.log(arrey);

let addition = arrey.reduce((res,curr) => {
    return res+curr;
});
console.log("sum =",addition);
let factorial = arrey.reduce((res,curr) => {
    return res*curr;
});
console.log("product =",factorial);
