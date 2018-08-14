//factiorials

function factorial(n){
  //set the end point
  if(n <= 1) return 1
  //call the function recursively
  return n * factorial(n - 1)
}

// console.log(factorial(4))

function fibonacci(n){
  console.log("The value of n currently is " + n)
  if(n <= 1) return n 
  return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(5))

function sum1ToN(n){
  if(n <= 1) return 1
  return n + sum1ToN(n - 1)
}

sum1ToN(4)

function multipleOf3(n){ 
  return (n<=0) ? 0 : (n - (n%3)) + multipleOf3(n - (n % 3) - 3)
}
console.log(multipleOf3(10))