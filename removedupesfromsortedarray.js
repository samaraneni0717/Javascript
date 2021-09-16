

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    //steps
    //loop through the array and  splice the array to be inplace with index and count
    const length = nums.length;

    let counter = 0;
    let i = 0;
    for (j = 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            counter++;
        } else {
            if (counter > 0) {
                nums.splice(i, counter);
            }
            i++;
            j = i;
            counter = 0;

        }

    }


    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));