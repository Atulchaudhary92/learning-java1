function giveName(name){
    this.name=name;
}
function loginDetail(name,loginId,password){
    giveName.call(this,name);
this.loginId=loginId;
this.password=password;
}

const details=new loginDetail("atul","atul@gmail.com",1233)
console.log(details);