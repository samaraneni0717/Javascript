/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let obj={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    
    //steps: Iterate through the input and see if the first lower than next 
// if YES then subtract the corresponding numerical values
let charArr = s.split('');
let numValue=0;
if(charArr.length <1 || charArr.length > 15){return}
    
for(let i=0; i<charArr.length; i++){
    if(Object.keys(obj).indexOf(charArr[i]) === -1){
        return
    }
    if(i+1 >= charArr.length || obj[charArr[i]] >= obj[charArr[i+1]] ){
        numValue= numValue + obj[charArr[i]];
    }
    else if ( obj[charArr[i]] < obj[charArr[i+1]] ) {
        numValue += obj[charArr[i+1]] -obj[charArr[i]];
        i=i+1;
    }
}
    if(numValue>=1 && numValue<=3999){
            return numValue;
    }
else{return}

};

// Input: s = "III"
// Output: 3

// Input: s = "IX"
// Output: 9