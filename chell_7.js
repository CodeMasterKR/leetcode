/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);

    let left = 1;
    for(let i = 0; i < n; i++){
        res[i] = left;
        left = left * nums[i];
    }

    let right = 1;
    for(let i = n - 1; i >= 0; i--){
        res[i] = res[i] * right;
        right = right * nums[i];
    }

    return res;
};

let nums = [0, 0];

console.log(productExceptSelf(nums));