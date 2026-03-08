const myArray=new Array(1,2,3,4)
// console.log(myArray);
// [ 1, 2, 3, 4 ]

// array method
// myArray.push(6);
// [ 1, 2, 3, 4, 6 ]
// console.log(myArray);
// [ 1, 2, 3, 4 ]

// myArray.unshift(9)
// console.log(myArray);
// [ 9, 1, 2, 3, 4 ]

// myArray.shift();
// console.log(myArray);
//  [ 2, 3, 4 ]

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(4));
// true
// 3

// convert to string
// const newArr=myArray.join();
// console.log(newArr);
// 1,2,3,4


// slice ,splice
console.log("A",myArray);
const myn1=myArray.slice(1,3);
console.log("B",myn1);
const myn2=myArray.splice(1,3);
console.log("C",myArray);
console.log("D",myn2);
A [ 1, 2, 3, 4 ]
B [ 2, 3 ]
C [ 1 ]
D [ 2, 3, 4 ]