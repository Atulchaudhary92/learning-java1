// function add(a,b){
//     return a+b;
// }
// function execute(a,b,functionName){
//     return functionName(a,b);
// }

// console.log(execute(1,4,add));

// const handleObject={
//     userName:"Atul",
//     age:22
// }
// console.log(handleObject.userName)

// const myNewArray=[200,400,100,600]
// function returnSEconValue(getArray){
//     reuturn getArray
// } 


// this function 
// /
// console.log(addOne(3))
// 4

// implicit return for one line statement that does not need to return the value.
// const addone=(num1)=>( num1+1) 
// returning an object
// const object=()=>({username:"Atul chaduary"})
// console.log(object())
// { username: 'Atul chaduary' }

// IIFE(internal invoked function Expressions)
(function chai(){
    console.log("DB connected");
})();

(()=>{
    console.log("DB connected two");
})();