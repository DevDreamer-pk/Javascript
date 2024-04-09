function factorial(limit) {
  let result = 1;

  for (let i = 1; i <= limit; i++) {
    result = result * i;
  }

  return result;
}

let limit = 6;
let fact = factorial(limit);
console.log(fact);
