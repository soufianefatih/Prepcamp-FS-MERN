//  Task 1 : Factorial
//  Write a program that calculates the factorial of a number: 



let num = 5 ;
let result = 1;

for (let i = 1 ; i <= num; i++) {
    result *= i;
    console.log(result); 
}

console.log(result); 




// function calculateFactorial(n) {
//     let result = 1;
  
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
  
//     return result;
//   }
  
//   const factorialOf5 = calculateFactorial(5);
//   console.log(factorialOf5); // Output: 120