//Program to demonstrate the use of spread operator.

function sum(a, b, c) {
  console.log(a + b + c);
}

var arrval = [1, 2, 3];
sum(...arrval);

/* 
Note: 
1. Spread operator spreads the complete logic of the function on
the variable with which it is passed.

2. Here, '+' operation is made to spread across array variable 'arrval'
inside the function sum.
*/



/*
            Spread operator vs Concat method.
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

//1st method.
//arr1 = arr1.concat(arr2);

//2nd method.
arr1 = [...arr1, ...arr2, ...arr3];
console.log(arr1);

//Here, spread operator is utilized
//which helps to concatenate as many
//arrays as we want.




