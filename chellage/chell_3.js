/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];

    candies.forEach((element) => {
        if (element + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    });

    return result;
};

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;


console.log(kidsWithCandies(candies, extraCandies));
