

function captializeEachWordInAsentence(inputText){
   const strArr= inputText.split('.');
   strArr.forEach((element,index) => {
     const nestedArr=  element.trimLeft().split(' ');
     nestedArr[0]= nestedArr[0].toUpperCase();
     strArr[index] = nestedArr.join(' ');
   });
return strArr.join('.');
}

console.log(captializeEachWordInAsentence('here you go. i am leaving.meet you tomorrow'));