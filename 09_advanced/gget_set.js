class User{
    constructor(email,password){
    this.email=email;
    this.password=password;}
    set email(value){
        this._email=value;
    }
    get email(){
        return `${this._email}atul`;
    }
}

const user1=new User("atul",123)
console.log(user1.email);