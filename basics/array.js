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
// console.log("A",myArray);
// const myn1=myArray.slice(1,3);
// console.log("B",myn1);
// const myn2=myArray.splice(1,3);
// console.log("C",myArray);
// console.log("D",myn2);
// A [ 1, 2, 3, 4 ]
// B [ 2, 3 ]
// C [ 1 ]
// D [ 2, 3, 4 ]

//  join two arrays

const marvel_heros=["spiderman","ironman"]
const dc_heros=["superman","flash"]
// 1.push()
// 2.concat()
// 3.spread()

// const all_heros=[...dc_heros,...marvel_heros,...myArray]
// console.log(all_heros);
// [ 'superman', 'flash', 'spiderman', 'ironman', 1, 2, 3, 4 ]

// console.log(Array.isArray("Atul"))
// false
// console.log(Array.from("Atuul"))
// [ 'A', 't', 'u', 'u', 'l' ]

// console.log(Array.from({name:"Atul"}))
// []

// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3))
// [ 'A', 't', 'u', 'u', 'l' ]
