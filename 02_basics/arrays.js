// arrays create shallow copy =>  same reference(chnages will get reflected back in original array)
const arr=[1,2,3,4,5,6,7];
// console.log(arr[2]);
// methods in array
// arr.push(6);
// console.log(arr);
// arr.pop();

// unshift->add in front shift ->>>pop from front

// const newarr=arr.join()// joins convert an array to string 
// console.log(newarr);


console.log('a',arr);
const myn1=arr.slice(1,3); // slice kya krega include from  a to b-1 do not chnage hte original array and array remains same
console.log(myn1);

 console.log("   ");


console.log('b',arr);
const myn2=arr.splice(1,3);// splice kya krega include krega from a to b both and original array ko chnge krega remove values from a to b
console.log( 'c', arr);