/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    if(!m && !n) {
        return null;
    }
    let ret = [...nums1, ...nums2].sort((a, b) => a - b);
    if( (m + n) % 2 !== 0) {
        return (ret[(m + n - 1) / 2]).toFixed(1)
    }else {
        return ((ret[(m + n) /2 - 1] + ret[(m + n) /2 ]) / 2).toFixed(1)
    }
};

console.log(findMedianSortedArrays([3], [-2,-1]))