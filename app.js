// console.log('ONE');
// console.log("two");
// setTimeout( () => {
//     console.log("hello");
// },
// 4000 ); //asynchronous 
// console.log("three");
// console.log("four");

// callbacks
// const hii = () => {
//     console.log("Hii");
// };
// setTimeout(hii, 3000);

// callback hell
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData (1, () => {
//     console.log("getting data 2.....");
//     getData (2, () => {
//         console.log("getting data 3.....");
//         getData (3, () => {
//             console.log("getting data 4.....");
//             getData (4);
//         }); 
//     });
// });
// to solve this nested callbacks a concept called promises are used

// Promises
// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve("success");
//     reject("some error occured");
// });
// promise objects are created by API and we handle it

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });    
//     }

// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("i am a promise");
//         // resolve("Success");
//         reject("Network error");
//     });
// };
// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err) => {
//     console.log("rejected",err);
// });

// promise chain
// function asyncFunct1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("success");
//         }, 2000);
//      });
// }
// function asyncFunct2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("success");
//         }, 2000);
//      });
// }
// function asyncFunct3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 3");
//             resolve("success");
//         }, 2000);
//      });
// }
// console.log("fetching data 1....");
// asyncFunct1().then((res) => {
//     console.log("fetching data 2....");
//     asyncFunct2().then((res) => {});
// });

// another way (actual)
// asyncFunct1()
// .then((res) => {
//     return asyncFunct2();
// })
// .then((res) => {
//     return asyncFunct3();
// })
// .then((res) => {
//     console.log(res);
// });

// aysnc - await
// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherData () {
//     await api();
//     await api();
// }

// api
// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
// const getFacts = async () => {
//     console.log("getting data...");
//     let response =await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[1].text;
// };
// btn.addEventListener("click", getFacts);
alert("If your balls aren't strong enough leave the site");