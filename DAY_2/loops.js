//  Task 1 : Factorial
//  Write a program that calculates the factorial of a number: 


let num = 5 ;
let result = 1;

for (let i = 1 ; i <= num; i++) {
    result*=i;
}

console.log(result); 



// Task 2 : How many digits ?
// Giving a number and using loops, write a program that give you how many digits in this number :

let number = 12345;
let count = 1;
  while (number >= 1) {
    number = (number / 10); 
    count++;
    console.log(count);
  }

console.log(count);


// Task 3 :  Time to draw !
// Using loops draw the following tree: 

// const n = 4;

// for (let i = 1; i <= n; i++) {
//   let spaces = ' '.repeat(n - i);
//   let stars = '*'.repeat(2 * i - 1);
//   console.log(spaces + stars);
// }



const n = 4;

for (let i = 1; i <= n; i++) {
  let spaces = '';
  let stars = '';

  for (let j = 1; j <= n-i ; j++) {
    spaces += ' ';
    // console.log('how',j);
    // console.log('spaces',spaces);
  }
  for (let k = 1; k <= 2 * i-1; k++) {
    stars += '*';
    // console.log(stars);
  }

  console.log( spaces + stars );
}



