/*
function add(num1, num2){
    return num1 + num2;
}

const tota = add(15,20);
console.log(tota);
*/

/*
function add(num1, num2){
 if(num2 == undefined){
    num2 = 0;
 }
 return num1 + num2;
}

const total = add(15);
co*/

/*
function add(num1, num2){
 num2 = num2 || 0;
 return num1 + num2;
}

const total = add(15);
console.log(total);
*/

// default paramiter 0 tai paramitar akta pass koralayo error dibe nah tbe paramitar num1,num2 2tai pass kori tahole
// 0 avoid korbe abong pass kora paramitar nibe 
// es6 

function add(num1, num2 = 0){
 return num1 + num2;
}

const total = add(15, 1);
console.log(total);