// Deep Vs Shallow Copy
// const a={id:1,name:"Vikas"} //original object
// // cloning object a to b
// const b=a  //cloned object
// //change the id value of b object
// b.id=5
// console.log("A value ",a)
// console.log("B value ",b)

// Deep copy
// let var1=4;
// let var2=var1;
// var2=10;
// console.log("var1 value ",var1);
// console.log("var2 value ",var2);

// const a={id:1,name:"Vikas",address:{flatNo:23}} //original object
// // cloning object a to b

// //using spread operator
// // const b={...a}  //cloned object

// // using assign operator
// // const b=Object.assign({},a)

// //using stringify and parse
// const b=JSON.parse(JSON.stringify(a))

// //change the id value of b object
// b.address.flatNo=5
// b.id=5
// console.log("A value ",a)
// console.log("B value ",b)

// Array 
const arr1=[1,2,3]
const arr2=[...arr1];
arr2[0]=5
console.log("Arr1 ",arr1)
console.log("Arr2 ",arr2)