
// Iterates through each element and returns true 
function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true; ''
        }
    }
    return false;
}
console.log(linearSearch([1, 67, 568, 90, 76, 55, 67], 7))

// Searching Algo-- Binary Search
//Gist: On a sorted array divide 

function binarySearch(arr, n) {
    const index = arr.length % 2 === 0 ? arr.length / 2 - 1 : Math.floor(arr.length / 2);
    const compValue = arr[index];
    let newArr = [];
    if (arr && arr.length === 1) {
        let bool = arr[0] === n ? true : false;
       
        return bool;

    }
    if (n === compValue) {
        return true;
    } else if (n > compValue) {
        newArr = arr.slice(index, arr.length-1)
    } else if (n < compValue) {
        newArr = arr.slice(0, index)
    }

    binarySearch(newArr, n);



}

console.log(binarySearch([67], 67));

// Second way

function binarySearchBetterWay(arr, n){
let lowIdx=0;
let highIdx = arr.length-1;
while (lowIdx <= highIdx){
    let midIdx = Math.floor((lowIdx+highIdx)/2);
    if(n === arr[midIdx]){
        return midIdx;
    }else if(n < arr[midIdx]){
        highIdx = midIdx
    } else{
        lowIdx=midIdx;
    }

}
return -1
}
console.log(binarySearchBetterWay([34,65,67,76], 67))
