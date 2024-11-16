function sum(a, b) {
  return a +b;
}

const multiply = (a, b) => a * b;

const calculate = (a, b, cb) => {
  // executing the callback function 
  const result = cb(a, b);
  
  console.log(result);
}

calculate(5, 4, sum);
calculate(10, 10, multiply);