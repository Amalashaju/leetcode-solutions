/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [3, 2, 2, 3]
let val = 3
var removeElement = function (nums, val) {
    let write = 0
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== val) {
            nums[write] = nums[read]
            write++
        }
    }
    return write


};

let length = removeElement(nums, val)
console.log(nums.slice(0, length))