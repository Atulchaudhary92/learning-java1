// const arrObj=[
//     {
//         langName:"javascript",
//         fileName:"js"
//     },
//     {
//         langName:"python",
//         fileName:"py"
//     },
//     {
//         langName:"c++",
//         fileName:"cpp"
//     }
// ]

// arrObj.forEach( function(item){
// console.log(item.fileName,` `,item.langName)
// }) 

// filter on array of objects.
// used for  return on condition
// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
// ];
// const edition_2004=books.filter((bk)=>{ return bk.edition==2004});
// console.log(edition_2004)

// map for update value
 const arr=[1,2,3,4,5,6,7,80];
// const num=arr.map((num)=>{ return num*num})
// console.log(num)
// chaining 

// const chain=arr.map((num)=>  num*num).map((num)=> num+1).filter((num)=> num>10)
// console.log(chain)

// reduce happens on array to add up all elements
const sum=arr.reduce((acc,currVal)=>acc+currVal,0)
console.log(sum)