const chai={
    name:"ginerTea",
    price:100,
    isAvailable:true, 
    makeTea:function(){
        console.log("tea cannot be made");
    }
}

for(let [key,value] of Object.entries(chai)){
    console.log(`${key} => ${value}`);
}