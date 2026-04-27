function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let i = n - 2;

    // 1-qadam: Oxiridan "pasayish" boshlagan i ni top
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // 2-qadam: nums[i] dan katta, eng kichik elementni o'ng tarafdan top → swap
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3-qadam: i+1 dan oxirigacha reverse qil
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}