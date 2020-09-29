function findLongestWord (string = "") {
    // Write code under this line
   let str = string.split(' ');
   let longestWord = str[0];
   for(let i = 0; i < str.length; i+=1){
    if(str[i].length > longestWord.length){ 
    longestWord = str[i]; 
    
     }
  }
  return longestWord;
}
  
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//   'jumped'

  //console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  //console.log(findLongestWord('May the force be with you'));
  // 'force'