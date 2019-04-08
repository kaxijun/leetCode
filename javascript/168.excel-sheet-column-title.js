/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.45%)
 * Total Accepted:    166.8K
 * Total Submissions: 581.5K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 */

const map = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let flag = n % 26 === 0;
    let ret = map[ flag ? n % 26 + 25 : n % 26 - 1];
    let letter = n;
    while(letter > 26) {
        let help = letter % 26 === 0 ? 1 : 0;
        letter = Math.floor(letter/ 26) - help;
        ret = map[ letter % 26  === 0 ? letter % 26 + 25 : letter % 26 - 1] + '' + ret;
    }
    return ret;
};
