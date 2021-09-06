import data from './data.js';

const problem1 = data.map((product) => {
  return `${product.name} ${product.price}`
});

const problem2 = data.filter((product) => {
  return product.category === "Toys";
});

const problem3 = data.reduce((total, product) => {
  return total + product.rating;
}, 0) / data.length;

// console.log(problem1);
// console.log(problem2);
console.log(problem3);
