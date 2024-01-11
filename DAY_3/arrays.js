// Task 1 : Speed run !! 
// Write the following functions : 
// sum(numbers) : a function that takes an array of numbers and returns their sum.
// countEven(numbers) : a function that takes an array of numbers and returns the count of even numbers.
// double(numbers) : a function that takes an array of numbers and returns a new array where each element is doubled [4, 2, 7] ----> [8, 4, 14]

function sum(numbers) {
    let result = 0
 for (let i = 0; i < numbers.length; i++) {
    result+= numbers[i]
    
 }

 return result

    
}

console.log(sum([1,2]));



function countEven(array){
	var count = 0;
	for(let i = 0 ; i < array.length; i++) {
		if (array[i] % 2 === 0){
			count++;
		}
	}
	return count;
}

console.log(countEven([1, 10]));



function double(array){
    let result = []
	
	for(let i = 0 ; i < array.length; i++) {
		result.push(array[i]*2) 
	}
    return result
}

console.log(double([4, 8]));


// Task 2 : The pair of socks
// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example :
// socks = [1, 2, 1, 2, 1, 3, 2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.



// function sockMerchant(array){
//    let  count = 0
//    let newarray = []
// 	for(let i = 0 ; i < array.length; i++) {
// 		if (array[i] == array[i+1]){
//            newarray.push(array.slice(1,3))  
//            console.log('new',newarray);
//              count ++
// 		}
// 	}
//    return newarray

// }

// console.log('array',sockMerchant([2,1,2,3,1]));
// function sockMerchant(array) {
//     let count = 0;
//     let pairedSocks = [];

//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] === array[i + 1]) {
//             // Found a pair
//             pairedSocks.push(array.slice(i, i + 2));
//             count++;
//             i++; // Skip the next sock in the next iteration
//         }
//     }

//     return pairedSocks;
// }

// // Test case
// console.log(sockMerchant([2, 1, 2, 3, 1]));
function sockMerchant(array) {
    let count = 0;
    // let a =[] ; let b = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            // Found a pair
        
            array = array.slice(0, i).concat(array.slice(i + 2));
            count++;
            i--; // Adjust the index to re-check the previous pair
        }
    }

    return count;
}

// Test case
console.log(sockMerchant([2,2, 3, 1,1])); // Output: 2






// function sockMerchant(socks) {
//     let count = 0;
//     let sockCount = {};

//     // Iterate through the array of socks
//     for (let i = 0; i < socks.length; i++) {
//         const sockColor = socks[i];

//         // Update the count in sockCount
//         sockCount[sockColor] = (sockCount[sockColor] || 0) + 1;

//         // Check if the count is even after updating
//         if (sockCount[sockColor] % 2 === 0) {
//             // Increment the count by 1 (since each pair has two socks)
//             count++;
//         }
//     }

//     // Return the final count of pairs
//     return count;
// }

// // Test cases
// console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])); // Output: 2
// console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
// console.log(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // Output: 4
// console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 0




// function sockMerchant(socks) {
//     let count = 0;

//     for (let i = 0; i < socks.length; i++) {
//         // Skip already paired socks
//         if (socks[i] === -1) {
//             continue;
//         }

//         for (let j = i + 1; j < socks.length; j++) {
//             if (socks[i] === socks[j]) {
//                 // Found a pair, increment count and mark both as paired
//                 count++;
//                 socks[i] = -1;
//                 socks[j] = -1;
//                 console.log( 'AZERTY',socks[j]);
//                 break; // Exit the inner loop after finding a pair
//             }
//         }
//     }

//     return count;
// }

// // Test cases
// console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])); // Output: 2
// console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
// console.log(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // Output: 4
// console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 0




// function sockMerchant(socks) {
//     let count = 0;

//     for (let i = 0; i < socks.length; i++) {
//         for (let j = i + 1; j < socks.length; j++) {
//             if (socks[i] === socks[j]) {
//                 count++;
//                 socks[i] = null; // Mark the first sock
//                 socks[j] = null; // Mark the matched sock
//                 break;
//             }
//         }
//     }

//     return count;
// }

// // Test cases
// console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])); // Output: 2
// console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
// console.log(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // Output: 4
// console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 0






function Linear(array,params) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === params) {
          return i 
        }   
      }
      return -1
    
    
}

console.log('Linear',Linear([1,2,3,4],5));