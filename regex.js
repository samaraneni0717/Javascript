//Find all case matches for letter 'i' in a string and return the count

function charMatch(s){
    let ctr=0;
    let beforeLength = s.length;
    s=s.replace(/i/gi,'');
    let afterLength=s.length;
    return beforeLength-afterLength;
}

console.log(charMatch('i am an Indian by birth'))


//Usecase2:
