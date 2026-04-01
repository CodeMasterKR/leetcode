/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        let newPrefix = "";
        if (strs[i] === "") {
            return "";
        }
        while (
            j < prefix.length &&
            j < strs[i].length &&
            prefix[j] === strs[i][j]
        ) {
            newPrefix = newPrefix + prefix[j];
            j++;
        }
        if (newPrefix.length < prefix.length) {
            prefix = newPrefix;
        }
    }
    return prefix;
};

let strs = ["flower", "flower", "flower", "flower"];

console.log(longestCommonPrefix(strs));
