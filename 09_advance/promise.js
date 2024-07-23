/******************************  PromisesCodes    ************************************** */


// declaring a promise
const promise1=new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("paalu khi ki");
    resolve();
 },1000)
})

// function consumption
promise1.then(function(){
    console.log("moti aurat");
})





// delaring a promise  wihout holding in variable # most commonly used in react backend 

new Promise(function(resolve,reject){
     setTimeout(() => { // used arrow function in settimeout for concpet clearence
        console.log("ANANya loves me");
        resolve()
     }, 1000);
}).then(function(){
    console.log("me love paalu ");
})

// 4th one
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true;
        if(!err) {
            resolve({username:"tandoori momos"})
        } else{
            reject("something went wrong ")
        }
    },1000)
})

promise4
.then((user)=>{ // arrow function
 return user.username;
})
.then((username)=>{
  console.log(username);
})
.catch(function(err){
    console.log(err);
})
/******************************  Promisesconcepts    **************************************  

1. promise has two methods resolve(accept) ,reject(not accpeted requested)
2. .then ka connection resolve se hota h 
3. promise create krte time jo h resolve() write this tb jaakr .then() properly consume krega promise ko
4. promise k ander function aayega u can use both function key word as discussed in lecture as well as arrow function also then function m resolve ,reject likhte h
5. resolve k ander jo v paramter pass kroge vo .then() m mil jaayega practical example on promise 3 maine lecture m nhi likha to khud sir k lecture se likho

6. promise 4 imp h syntax wise reject kaise use krna h vo aa gya chaining krni imp h vo aa gyi .then() yhe jo v return krega error or jo bhi vo agle .then() m aayega and so on
   
7. . then catch promise sb m ek call back milta h which u can use by arrow function ya fir normal function likh k


8. promise 5 ache se smjna bhaut nexrt level imp h
promise ko aap async await se bhi handle krte h(Yuvan yhi use krta h backend m)

jha async aayega wha await aayega hiu for sure check last example .fetch waala
******************************************************************************************/