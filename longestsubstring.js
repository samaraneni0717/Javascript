// Input: geeksforgeeks
// Output: 
//Longest non repeating substring

///  ToDO: Work on sliding window method
function lcs(inpTxt){
    let startIdx=0;
    let endIdx=startIdx+1;
    let lcsWord=''
   // let lcsWord = inpTxt.slice(startIdx,endIdx);
    let max =0;
   for(let i=0; i<inpTxt.length; i++){
      //ptr++;
    
       if(inpTxt[i] === inpTxt[i+1]){
      //  lcsWord = inpTxt.slice(startIdx,endIdx);
        if( inpTxt.slice(startIdx,endIdx).length > lcsWord.length){
        lcsWord = inpTxt.slice(startIdx,endIdx);
    }
       max= endIdx-startIdx;
        startIdx = endIdx;
        endIdx = endIdx+1;

        
       
       }else{
      //  startIdx = i;
       // endIdx = i+1;
     //   max=Math.max(lcsWord.length,max);
           //startIdx=i;
           endIdx = endIdx+1;
    // if( inpTxt.slice(startIdx,endIdx).length > lcsWord.length){
    //     lcsWord = inpTxt.slice(startIdx,endIdx);
    // }

       }
   }
   return lcsWord;
}

console.log(lcs('geeksforgeeks'))


// function lcsNonRepeating(inpTxt){
// let wrd = new Set();
// let beginIdx =0;
// let trailIdx = 0;
// let max=0;

// while(beginIdx < inpTxt.length){
//     wrd.add(inpTxt[beginIdx]);

//     if(!wrd.contains(inpTxt[beginIdx])){

//     }else{
//         wrd.remove()
//     }
// }
// }