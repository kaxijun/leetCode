/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.08%)
 * Total Accepted:    600.6K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */


const isValid = x => {
    const range = Math.pow(2, 31);
    return x >= -range && x <= range;
}
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ret = 0;
    if(isValid(x)) {
        if(x < 0) {
            ret = -Number((-x).toString().split('').reverse().join(''));
        }else {
            ret = Number(x.toString().split('').reverse().join(''))
        }
    }
    if(!isValid(ret)) ret = 0;
    return ret;
};
