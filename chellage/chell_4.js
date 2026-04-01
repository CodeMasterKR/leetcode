/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    if(flowerbed.length === 1 && flowerbed[0] === 0){
        return true;
    }
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
            count++;
            i++;
        } else if (i === flowerbed.length - 1 && flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
            count++;
        }else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
            count++;
            i++;
        }
    }
    if (count >= n) {
        return true;
    } else {
        return false;
    }
};

let flowerbed = [1,0,1,0,1,0,1];
let n = 0;

console.log(canPlaceFlowers(flowerbed, n));

