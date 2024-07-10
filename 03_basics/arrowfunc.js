console.log(this) // in vs it gives {} in browser it gives window object because of engine beging seprtaed now

const user={
    name:"Ananya Jaiswal",
    age:87,
}
const chai=()=>{
    console.log(this) // got { };
}

/***********  syntax showing  arrow function******************/

// type 1 : { } use lia to return likhna pdega
const addtwo=(a,b)=>{
    return a+b;
}

// type 2: implicit return
const addtwo1=(a,b) => a+b

// type 3:( ) to no need to write return , implicit return 
const addtwo2=(a,b) => (a+b)

// type 4: returning a object suntax ( { })
const user1=()=>({name:"pompom"})


/*************** IIFE  ************** */
// named iffee
(function chai(){
    console.log("paalu loves my nunnu");
})();

// unamed ifee using paramter
(( name)=>{
console.log(` hi ${name}`);
})('paalu')

/******************* interview ques****************************
// Q1: browser m jb this run hoga most global object is window

// Q2:normal and arrow function m difference is not that ki normal m can use this and arrow m u cant 
use this dont tel in interview this ans 

// Q3 : GLOBAL SCOPE k pollution se issue hota h to uske VARIABLES SE JO POLLUTION AA RHA USSE AVOID
 KRNE K LIE (HTAANE K LIE) WE USED IIFE 

 // Q4 : 2 IFEE  ek sath k lie first ifee k baad use semicolon ;
 
 I love u ananya baby sooo much cant live without you my lifeline 
 /******************* interview ques*****************************/