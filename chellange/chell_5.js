/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let array = s.split("");
    let arrayVowels = [];

    array.forEach((element, index) => {
        if(element === 'i' || element === 'u' || element === 'o' || element === 'a' || element === 'e' || element === 'I' || element === 'U' || element === 'O' || element === 'A' || element === 'E'){
            arrayVowels.push(element);
        }
    });

    arrayVowels.reverse();

    console.log(arrayVowels);
    

    array.forEach((element, index) => {
        if(element === 'i' || element === 'u' || element === 'o' || element === 'a' || element === 'e' || element === 'I' || element === 'U' || element === 'O' || element === 'A' || element === 'E'){
            array[index] = arrayVowels[0];
            arrayVowels.shift();
        }
    });

    return array.join("");
};


let s = "IceCreAm";

console.log(reverseVowels(s));
