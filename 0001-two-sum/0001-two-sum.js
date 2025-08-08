/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    for(i=0;i<nums.length-1;i++)
   {
    for(j=i+1;j<nums.length;j++){
        
        sum=nums[i]+nums[j]
        if(sum==target){
           return[i,j]
        }
    }
   }
};
nums=[2,7,11,15]
target=9
result = twoSum(nums,target)
console.log(result)
