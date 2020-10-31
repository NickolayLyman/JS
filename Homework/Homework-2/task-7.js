function filterArray(array) {
    'use strict';
    const numbers = [];
    let y=0;
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      if(Number.isFinite(array[i]) == true) {
          y = array[i];
          numbers.push(y);
      }
    }
    return numbers;
  }
  
  console.log(filterArray([-2, 0, 2]));
  // [-2, 0, 2]
  
  console.log(filterArray([1, NaN, Infinity]));
  // [1]
  
  console.log(filterArray([0, -0, 100, '100']));
  // [0, 0, 100]
  
  console.log(filterArray([undefined, false, null, [], 1]));
  // [1]
  
  console.log(filterArray([{}, () => {}, 2]));
  // [2]