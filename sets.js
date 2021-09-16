//Set -- Data structure to store,search,delete unique values in O(1) time

//Return all common elements between two sets
function intersectSets(setA, setB) {
    let setC = new Set()
    for (let ele of setA) {
        if (setB.has(ele)) {
            setC.add(ele)
        }
    }
    return setC;
}
console.log(intersectSets(new Set([12,55,78,99]), new Set([55,78])))


function isSuperset(setA,setB){
    for(let ele of setB){
        if(!setA.has(ele)){
            return false
        }
    }
    return true;
}
console.log(isSuperset(new Set([12,55,78,99]), new Set([55,78])))


function unionSet(setA,setB){
 //= new Set();
 let setC = new Set(Array.from(setA).concat(Array.from(setB)));
    return setC;
}
console.log(unionSet(new Set([12,55,78,99]), new Set([55,78,100])))


function uniqueList(arr1, arr2){
    let setC = new Set(arr1.concat(arr2));
    return Array.from(setC);
}
console.log(uniqueList([12,55,78,99], [55,78,100])); //O(m+n)
