class User{
    constructor(name,loginId,password){
        this.name=name;
        this.loginId=loginId;
        this.password=password;
    }
    encryptPassword(){
return `${this.password}abc`;
    }
}

const user1=new User("atul","atul@gmail.com",123);
console.log(user1.encryptPassword());