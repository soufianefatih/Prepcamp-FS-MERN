// Task 1 : Going back in Time !
// Let's go back to some of the previous exercises and recreate them as functions. Use your answers to the previous challenges, to help you create the following functions 


function factorial(n) {
    let result = 1
for (let i = 1 ; i <= n; i++) {
        result=result* i;
    } 
    return result 
}

console.log(factorial(5));


function nDgits(number) {
    let count = 1;
    while (number >= 1) {
      number = (number / 10); 
      count++;
    }
   return count  
}
console.log(nDgits(12345));



function max(a,b,c) {
return (a>b && a>c) ? a: (c>a && c>b) ? c : b;   
}

console.log(max(1,5,7));



function myGrade(score) {
   
if (score > 85) {
    console.log("grade is A"); 
} else if (score > 70) {
    console.log("grade is B");
} else if (score > 55) {
    console.log("grade is C");
} else if (score > 40) {
    console.log("grade is D");
} else if (score > 15) {
    console.log("grade is E");
} else {
    console.log("grade is F");
}  
   return score
}

console.log(myGrade(85));



function combinator(n, p) {
    let P = 1;
    for (let i = 1; i <= p; i++) {
        P *= i;
    }

    let N = 1;
    for (let i = 1; i <= n; i++) {
        N *= i;
    }

    let nMinusP = n - p;
    let factorialNMinusP = 1;
    for (let i = 1; i <= nMinusP; i++) {
        factorialNMinusP *= i;
    }

    let result = N / (P * factorialNMinusP);

    return result;
}

console.log(combinator(5,2));



function calculator(x,y,op) {

  if(op == "+") return x +y
  if(op == "-") return x -y
  if(op == "*") return x *y
  if(op == "/") return x /y
  if(op == "c") {
    let P = 1;
    for (let i = 1; i <= y; i++) {
        P *= i;
    }

    let N = 1;
    for (let i = 1; i <= x; i++) {
        N *= i;
    }

    let nMinusP = x - y;
    let factorialNMinusP = 1;
    for (let i = 1; i <= nMinusP; i++) {
        factorialNMinusP *= i;
    }

    let result = N / (P * factorialNMinusP);

    return result;

  }
}
console.log(calculator(5,2,"c"));



