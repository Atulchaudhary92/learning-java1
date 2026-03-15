class User{
    constructor(name){
        this.name=name;
    }
    logMe(){
        console.log(`username is ${this.name}`);
    }
}
class labour extends User{
            constructor(laborName,labourId,wage){
                super(laborName);
                this.labourId=labourId;
                this.wage=wage;
            }
            laborWork(){
               return `labor is atworking  ${this.wage}/day`;
            }
}
const labor1=new labour("chai","chai@labor.com",123);
// const wage=labor1.laborWork();
// console.log(wage);
console.log( labour instanceof User);

