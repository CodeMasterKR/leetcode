/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) {
        return ""
    };

    let len1 = str1.length;
    let len2 = str2.length;
    let res = 1;

    while(true){
        res = len1 % len2;
        if(res === 0) {
            break;
        };

        len1 = len2;
        len2 = res;
    };

    return str2.slice(0, len2);
};

let str1 = "ABCABCABCABCABC";
let str2 = "ABC";

console.log(gcdOfStrings(str1, str2));


