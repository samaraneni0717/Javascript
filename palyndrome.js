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

/// Third type
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindromeTest = function(s) {
    
    //steps
    //trim spaces, comman, special chars
    //convert to same case
    
    s= s.toLowerCase();
    
    s = s.replace(/[^a-zA-Z0-9]+/g,'');
    s=s.trim();
    //step2: 
    let i=0;
    let j=s.length-1;
    while(i <= j){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
    
};
console.log(isPalindromeTest('A man, a plan, a canal: Panama'))