var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
                                                            
    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum === target) return target;

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
};