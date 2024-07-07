let myDate=new Date();
console.log(typeof myDate); // =====> object type h
// console.log(myDate.toDateString());  // gibes date format
// console.log(myDate.toLocaleTimeString()); give only local time
// console.log(myDate.toISOString()); // gives ist time
// console.log(mydate.tolocalstring()) // gives proper date format with time also

let create=new Date(2023,0,12);// yy/mm/dd and month wil starts from 0 
// console.log(create.toLocaleString());

//let curr=Date.now() ;// gives time in millisecond
//console.log(Math.floor(curr/1000)); // converting milisecond to second


let newdate=new Date();
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getHours());


newdate.toLocaleString('default',{
    weekday:"long",
})