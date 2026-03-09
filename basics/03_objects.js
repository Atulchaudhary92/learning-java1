const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4=Object.assign({},obj1,obj2,obj3)
// 1.console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// object of an array.
console.log(Object.keys(obj4))
// [ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj4))
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(Object.entries(obj4));
// same as the first one

