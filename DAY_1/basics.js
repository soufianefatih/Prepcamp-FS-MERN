// Task 1 :  Warm up

// Declare the following variables : 
// firstname : a variable containing your first name.
// lastname : a variable conta ining your last name.
// PI : a constant containing the PI value 3.14.  
// radius : a variable that contains a random number of your choice.
// favoriteSuperhero :  a variable containing the name of your super hero.
// favoriteQuote : a variable containing your favorite quote (ex: Difficult roads often leads to beautiful destinations)



let firstname = "soufiane";
let lastname = "fatih";
const PI = 3.14;
let radius = 5;
let favoriteSuperhero = "iron man";
let favoriteQuote = "Difficult roads often leads to beautiful destinations";


// Task 2 :  Speed run

  // Tell Your name: 


 let fullname = firstname + ' ' + lastname 

 console.log(fullname);

 //  Maths: 
// let area = PI * Math.pow(radius,2)
 let area = PI * radius * radius
 console.log(area);

 let perimeter = 2* PI * radius
 
 console.log(perimeter);

//  Motivation:

let motivation = "A wise man named " + favoriteSuperhero +' :' + ' ' + favoriteQuote

console.log(motivation);



// Task 3 :  Variable swap


// let a = 3;
// let b = 10;

// [a, b] = [b, a];

let a = 3;
let b = 10;
let c;

c = a;
a = b;
b = c;

console.log("After swapping: a = ", a, " and b = ", b);