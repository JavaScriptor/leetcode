// Source : https://oj.leetcode.com/problems/two-sum/
// Author : Albin Zeng.
// Date   : 2017-02-26

/********************************************************************************** 
* 
* Given an array of integers, find two numbers such that they add up to a specific target number.
* 
* The function twoSum should return indices of the two numbers such that they add up to the target, 
* where index1 must be less than index2. Please note that your returned answers (both index1 and index2) 
* are not zero-based.
* 
* You may assume that each input would have exactly one solution.
* 
* Input: numbers={2, 7, 11, 15}, target=9
* Output: index1=1, index2=2
* 
*               
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    let i = 0;
    for (; i < nums.length; i++) {
        if (undefined === map[target - nums[i]]) {
            map[nums[i]] = i;
        } else {
            return [map[target - nums[i]], i];
        }
    }
};
