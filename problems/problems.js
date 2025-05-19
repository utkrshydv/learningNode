// var a = 5
// var b = 6
// var ans = a+b
// console.log(ans)


// const person = {
//   hobbies: ['reading', 'cycling', 'football']
// }

// console.log(person)

// var prompt = require('prompt-sync')();
// var age = prompt("Enter your age")
// if(age > 20){
//   console.log("hatt buddhe")
// }


//day 1

//problem 1

// var prompt = require('prompt-sync')();

// var age = prompt("Enter your age: ")

// if(age < 18){
//   console.log("You get a 205 discount")
// } else if(age < 65){
//   console.log("Normal Ticket price applies")
// } else {
//   console.log("You get a 30% senior discount")
// }

//problem 2

// var prompt = require('prompt-sync')()

// var length = prompt("Enter length of rectangle: ")

// var breadth = prompt("Enter breadth of rectangle: ")

// var area = length * breadth

// console.log("Area is ",  area)

//problem 3

// function Product(name, price, inStock){
//   this.name = name;
//   this.price = price;
//   this.inStock = inStock;
// }

// const p1 = new Product("Laptop", 999.99, true)
// const p2 = new Product("Headphones", 199.99, false)
// const p3 = new Product("Smartphone", 699.99, true)

// console.log(p1, p2, p3)

//problem 4

// guestList = ["Tom", "harry", "Deck", "Bend", "hover"]

// var prompt = require('prompt-sync')()

// var name = prompt("Enter a name: ")

// if(guestList.map((guest) => 
//  guest.toLowerCase().includes(name.toLowerCase())
// ))
// {
//   console.log("you are invited")
// } else {
//   console.log("Not in guestList")
// }

//problem 5

// let weatherForecast = {
//   location: "New York",
//   current: {
//     temperature: 22,
//     unit: "Celsius",
//     condition: "Partly Cloudy"
//   },
//   forecast: [
//     {
//       day: "Tuesday",
//       high: 25,
//       low: 16,
//       condition: "Sunny"
//     },
//     {
//       day: "Wednesday",
//       high: 23,
//       low: 15,
//       condition: "Rain"
//     },
//     {
//       day: "Thursday",
//       high: 21,
//       low: 14,
//       condition: "Cloudy"
//     }
//   ]
// };
// let jsonString = JSON.stringify(weatherForecast, null, 2);
// console.log(jsonString);

// let jsonString = '{"location": "New York" , "climate" : "Sunny"}'

// let jsonObject = JSON.parse(jsonString)

// console.log(jsonObject)

// function add(a, b){
//   return a+b
// }

// var add = (a, b) => a+b;
// var result = add(3, 1000);
// console.log(result);

// //Immediately invoked fn
// (function(){
//   console.log("utk");
// })();

//callback fn

// function callbac(){
//   console.log("called bac")
// }


// const add = function(a, b, callbac){
//   var result = a+b;
//   console.log(result);
//   callbac()
// }

// add(3, 4, callbac)

// function add(a,b, callback){
//   var result = a+b;
//   console.log(result);
//   callback();
// }

// add(2, 3, () => console.log("add completed")) // anonymous function

//node apis - os and fs


// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', () => {
//   console.log("file is created")
// })

//importing from other files

// const notes = require('./notes.js')


// const result = notes.add(notes.age, 18);
// console.log(result);
// console.log(notes.age)


//using lodash (wordplay on low-dash)

// var _ = require('lodash')

// var data = ["person", "person", 1, 2, 3, 4, 1, 2, 3, "person"];

// var filter = _.uniq(data);
// console.log(filter);

//os module apis in node

// const os = require('os')

// console.log(os.platform(), os.arch(), os.cpus(), os.totalmem(), (os.freemem()/1024/1024/1024), os.uptime())
// const os = require('os')
// console.log(`First line${os.EOL}Second line`);

// //fs module apis in node

// const fs = require('fs');

// fs.readFile('greeting.txt', 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// })

// fs.writeFile('greeting.txt', 'Hello worlldldlldld', err =>{
//   if(err) throw err;
//   console.log('File written')
// })

// fs.appendFile('greeting.txt', '\nMore text', err => {
//   if (err) throw err;
// });

// fs.readdir('.', (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });


