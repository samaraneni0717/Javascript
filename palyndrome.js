//ex: RACECAR
// Detect if it's a Palyndrome

function isPalindrome(str){
    let  size = str.length -1
    let low=0;
// for(let i=0; i< str.length/2 ; i++){
  
//     if(str.charAt(i) !== str.charAt(size -1)){
// return false
//     }
//     size--;
// }

while(size > low){
    if(str[low] !== str[size]){
return false
    }
    size--;
    low++;
}
return true;
}
console.log(isPalindrome('abbas'));