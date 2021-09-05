//TWO SUM: Problem is From Leetcode
// Given an array of integers and target sum then return the indices of the numbers which yield the target sum

// ex: Input: [3,5,8,4,6,2] 8
function twoSum(arr, target){
    let indicesArr=[]
    for(let i=0; i<arr.length; i++){
        const diff = target - arr[i];
        let tempArr = arr.slice()
        tempArr[i] = tempArr[i] === diff? tempArr[i]=Math.random() : tempArr[i]
        if( tempArr.indexOf(diff) !== -1 && indicesArr.indexOf(i) === -1){
            indicesArr.push(i, tempArr.indexOf(diff));
        }
    }
    console.log(indicesArr)
}
twoSum([3,3],6);


//Optimized result using Map object
// Map object has size, get , set, has methods
function twoSumOptimized(nums, target){
    let map= new Map(); //Map object works great for key value pairs
    
    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        if(map.get(num) === undefined){
            map.set(target - num, i)
        }else{
            return [map.get(num), i]
        }
    }
}
console.log(twoSumOptimized([3,3],6));