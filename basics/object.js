const heros =["shakitman","spiderman"]
//object 
let myObj={
    name:"atul",
    age : 21,
}
 
const id=Symbol("1234")
const myFunction=function(){
    
}
// console.log(typeof id)

//  nums and math
const balance=new Number(1001);
// converting into string
    console.log(balance.toString());
// fix decimal place

// console.log(balance.toFixed(1));


function CreateUser(name,score){
    this.name=name;
    this.score=score;
}
CreateUser.prototype.increment=function(){
    this.score++;
}
CreateUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai=new CreateUser("chai",25);
const tea=new CreateUser("tea",10);

console.log(chai.printMe());