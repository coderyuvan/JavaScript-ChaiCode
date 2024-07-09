const tinder=new Object()  //creation of singleton object
const tinder1={} //creation of  non-singleton object 

const objj1={1:"a",2:"b"} 
const objj2={3:"a",4:"b"} 
const objj3={5:"a",6:"b"} 
//const obj4=Object.assign({},objj1,objj2,objj3)   // combinig different objects usig assign function and {} is given
// becoz we assume this our target 

// most widely used ... spread operator
const obj4= {...objj1,...objj2,...objj3};
//console.log(obj4);

// objects creation when data is from database
const user1=[
    {

    },
    {

    },
    {

    }
]


/********************  object deconstructing  ******************************/

const user={
    name:"paalu",
   age:232,
   sex:"Mn nhi krta feel guilty",
}
//  syntax
const {name :n}=user;
console.log(n);