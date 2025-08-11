/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1, 1, 2]
var removeDuplicates = function(nums) {
    let write = 1; 
    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[read - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }

    return write; 
};

let k = removeDuplicates(nums);
console.log(nums.slice(0, k));
