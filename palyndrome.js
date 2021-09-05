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

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < -Math.pow(1,31) || x > Math.pow(2,31)-1) return false;
    y= String(x).split('').reverse().join('');
    return y === String(x);
};