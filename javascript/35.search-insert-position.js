/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.38%)
 * Total Accepted:    370.4K
 * Total Submissions: 914.1K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    let mid = 0;
    while(low <= high) {
        mid = Math.ceil((low + high) / 2)
        if(target < nums[mid]) {
            high = mid-1;
        }else if(target > nums[mid]){
            low = mid+1;
        }else{
            return mid;
        }
    }
    return nums[mid] > target ? mid : mid + 1;
};

// console.log(searchInsert([1,3,5,6], 2))

