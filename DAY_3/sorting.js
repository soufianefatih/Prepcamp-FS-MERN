

function bubble(array) {
   let swappedd 
   do {
    swappedd = false
    for (let i = 0; i < array.length -1 ; i++) {
        console.log('11',array[i+1]);
        console.log('length',array[i-1]);
       if (array[i] >array[i+1]) {
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp 
        swappedd = true
       }
       console.log('array',array[i]);
       } 
    
   } while (swappedd);
   console.log(array);    
}
console.log(bubble([7,5,4]));



