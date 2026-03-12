// for of
const arr=[1,2,3,4];
for(const num of arr){
    // console.log(num)
}
 
 
//  maps
const map=new Map();
map.set("ind","India")
map.set("pak","Pakistan")
map.set("russ","Russia")

// for of
// not works for objects
// for(const [key,value] of map){
//     console.log(key,`=>`,value)
// }

// for in 
// maps does not works here as they are non iterative
const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
};

// for(const key in obj){
//     console.log(`${key} stands for ${obj[key]}`)
// }
// js stands for javascript
// cpp stands for c++
// rb stands for ruby

// const arr2=[3,4,5];
// for(const it in arr2){
//     console.log(it)
// }
// 0
// 1
// 2

// for each
const arr1=["cpp","c","js"];

function print(item){
 console.log(item)
}
arr1.forEach(print)





