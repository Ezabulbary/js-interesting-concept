//  primitive data type

/* 
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
*/

// Non-primitive data type

/* 
7. Object
*/


//  primitive data type
let a = 'hello';
let b = a;

console.log(a, b);
a = 'gelo';
console.log(a, b);

// Non-primitive data type

const x = {job:'web devlopment'};
const y = x;

console.log(x, y);
// x.job = 'Devloper';
y.job = 'Devloper'

console.log(x, y)