// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

function mergeTwoArrs(arr1, arr2){
// this is not inplace... since it returns a new array with concat operator
    arr1= arr1.concat(arr2).sort((a,b)=>{
        return a-b;
    })
    return arr1;
}

console.log('the result is', mergeTwoArrs([1,2,3,0,0,0],[2,5,6]));

// Approach 2
// WITH OUT CONCAT
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let x =nums1.length;
       n= n? n-1:0;
       if(n===0 ){return nums1}
       if(m===0){nums1.push(1); return nums1}
       while(n>=0){
           nums1[x++]=nums2[n--];
       }
   
       nums1= nums1.sort((a,b)=>{
           return a-b;
       });
       let idx =  nums1.indexOf(0);
       if(idx !== -1){
           let cnt = nums1.lastIndexOf(0)+1 -idx;
           
       nums1.splice(idx,cnt)
       }
    
      
   
       return nums1;
   };

console.log('the result is', merge([0],0,[1],1));
