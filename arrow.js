// kono akta sonkha ke double kore dilam
/*
function doubleIt(num){
  return num * 2;
}
const result = doubleIt(5);
console.log(result);
*/

/*
const doubleIt = function myFun(num){
  return num * 2;
}
const result = doubleIt(5);
console.log(result);
*/

//es6 er function declear er shot niom
// function er nam paramitar erpor return

/*
const doubleIt = num => num * 2;  // single paramiter er jonne
const result = doubleIt(50);
console.log(result);
*/

/*
// aka dik paramiter er jonne hole
const add = (x, y) => x + y;
const result = add(50, 70);
console.log(result);
*/

/*
const doubleIt = (num,num1,num2) => num + num1 + num2;  // single paramiter er jonne
const result = doubleIt(50,2,3);
console.log(result);
*/

/*
//paramiter chara
const give5 = () => 5;
const result = give5();
console.log(result);
*/

const doMath = (x, y) => {
   const sum = x + y;        // 7 + 6 = 12
   const diff = x - y;       // 7 - 5 = 2
   const result = sum * diff; // 12 * 2 = 24
   return result;
   
}
const result = doMath(7, 5);
console.log(result);