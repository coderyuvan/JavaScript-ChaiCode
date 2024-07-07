// constructor se object bnega to singleton bnega
// lierals se bna h agr object to singleton nhi bnega

// creation of symbol
const mysym=Symbol("key1");

// interview question  to use symbol as key in a object put it as [mysym]:"xyz"

// object literals
const user={
  name:"Yuvan",
  age:20,
  location:"pune",
  isLoggedIn:false,
  [mysym]: "pompom"
}
// console.log(typeof user[mysym]);
// user.name="Ananya";
// console.log(user.name);

//console.log(user);

// user.greeting=function(){
//     console.log("RadheRadhe");
// }
// console.log(user.greeting());

user.greet=function() {
    console.log(`${this.isLoggedIn} `);
}
console.log(user.greet());