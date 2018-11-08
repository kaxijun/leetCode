/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a, b;
for(var i = 0;i < nums.length; i++) {
    a = nums[i]
    for(var j = i + 1;j < nums.length; j++) {
        b = nums[j];
        if(a + b === target) {
            return [i, j];
        }
    }
}   
};