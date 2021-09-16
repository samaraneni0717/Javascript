/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // if the combination of the words in the dict is found in the string then return true
    
    let j=0;
    for(let i=1; i<=s.length; i++){
        if(wordDict.includes(s.substring(j,i))){
            if(i < s.length){
                  j=i+1;
                  i=i;
            }else{
                return true;
            }
          
        }
    }
    return false;
};

//console.log(wordBreak("aaaaaaa",["aaaa","aaa"]));
console.log(wordBreak("bb",["a","b","bbb","bbbb"]))