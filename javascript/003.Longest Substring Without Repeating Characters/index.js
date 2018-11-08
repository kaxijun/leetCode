/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let ret = 1;
    for(let i = 0; i <= s.length; i ++) {
        let flag = true
        let char = s.substr(i, 1);
        for(let j = i + 1; j <= s.length && flag; j ++) {
            if (char.indexOf(s.substr(j, 1)) === -1) {
                char += s.substr(j, 1);
            }else {
                flag = false;
                char = '';
            }
            ret = ret > char.length ? ret : char.length;
        }
    }
    return ret;
};

console.log(lengthOfLongestSubstring("1322"))