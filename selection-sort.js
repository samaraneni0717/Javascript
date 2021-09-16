//Swaps the element with the minimum element and repeat
function selectionSort(arr) {
    let minValue;
    for (let i = 0; i < arr.length; i++) {
        let isInnerLoopRan = false;
        for (let j = i; j < arr.length - 1; j++) {

            
            minValue = Math.min(arr[j], arr[j + 1]);
            isInnerLoopRan=true;
        }
        if(isInnerLoopRan){
            const idx = arr.indexOf(minValue)
            arr[idx] = arr[i];
            arr[i] = minValue;
        }
        

    }

    return arr
}

console.log(selectionSort([7,4,5,9,8,2,1]));