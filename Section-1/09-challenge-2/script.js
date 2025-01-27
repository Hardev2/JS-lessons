// challenge 2

// let x;
// let y;

// solution 1
// x = Math.random() * 100 + 1;
// y = Math.random() * 50 + 1 ;

// const sumOutput = Math.floor(x + y);
// const difOutput = Math.floor(x - y);
// const productOutput = Math.floor(x * y);
// const quoOutput = Math.floor(x / y);
// const remOutput = Math.floor(x % y);

// console.log(sumOutput);
// console.log(difOutput);
// console.log(productOutput);
// console.log(quoOutput);
// console.log(remOutput);

// console.log(x);

//solution 2

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

const dif = x - y;
const difOutput = `${x} - ${y} = ${dif}`;
console.log(difOutput);

const product = x * y;
const proOutput = `${x} * ${y} = ${product}`;
console.log(proOutput);

const qoutient = x / y;
const quoOutput = `${x} / ${y} = ${qoutient}`;
console.log(quoOutput);

const reminder = x % y;
const remOutput = `${x} % ${y} = ${reminder}`;
console.log(remOutput);
// console.log(sum);
