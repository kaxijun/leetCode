/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.92%)
 * Total Accepted:    409.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */

const xor = (ret, word) => {
    if(!ret.length || !word.length) return '';
    for(let i = Math.min(ret.length, word.length); i > 0; i--) {
        const test = word.substr(0, i);
        if(ret.indexOf(test) === 0) {
            ret = test;
            break;
        }
        // 整个单词都不匹配
        if(i === 1) {
            ret = '';
            break;
        }
    }
    return ret;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ret = '';
    if(strs.length > 0) {
        ret = strs[0];
        for(const d of strs) {
            ret = xor(ret, d);
            if(ret === '') {
                break;
            }
        }
    }
    return ret;
};
