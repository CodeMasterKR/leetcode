var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let max = 0;

    while(right > left) {
        let area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area);

        if(height[right] > height[left]) {
            left++
        } else {
            right--
        }
    }

    return max
}

