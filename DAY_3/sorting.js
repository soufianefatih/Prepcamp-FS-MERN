

function bubble(array) {
   let swappedd 
   do {
    swappedd = false
    for (let i = 0; i < array.length -1 ; i++) {
        // console.log('11',array[i+1]);
        // console.log('length',array[i-1]);
       if (array[i] >array[i+1]) {
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp 
        swappedd = true
       }
    //    console.log('array',array[i]);
       } 
    
   } while (swappedd);
   console.log(array);    
}
console.log(bubble([7,5,4]));


  //////////////////////////////////////////////////////////////////
  
function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
           
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

console.log(selectionSort([64, 25, 12, 22, 11]));



//////////////////////////////////////////////////////////////////////////////



function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        
        for (let j = i; j >0; j--) {
          
            if (array[j] < array[j-1]) {
                const temp = array[j] 
                array[j] = array[j-1]
                array[j-1] = temp   
            } else{
                break;
            }
  
        }
   
    }

    return array;
}


console.log(insertionSort([64, 25, 12, 22, 11])








