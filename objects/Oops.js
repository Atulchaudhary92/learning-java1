// object literal
const user={
    username:"Atul",
    login:true,
    age:21,
    greeting:function (){
        console.log(`welcome to the object:`)
    }
}
// console.log(user.userId());

// constructor Function;
function User(username,login,age){
    this.username=username;
    this.login=login;
    this.age=age;                    
    this.greeting=function(){
        console.log('${this.username} welcome to chai aur code: ')
    }
}

const userOne=new User("Atul",false,21);
console.log(userOne.greeting())