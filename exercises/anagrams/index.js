// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
    return string.toLowerCase().replace(/[^\w]/g, "").split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const stringAMap = createCharMap(stringA);
//     const stringBMap = createCharMap(stringB);
//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//         return false
//     }
//     for (let key in stringAMap) {
//         if (stringAMap[key] !== stringBMap[key]) {
//             return false
//         }
//     }
//     return true;
// }

// function createCharMap(string) {
//     let charMap = {};
//     string = string.toLowerCase().replace(/[^\w]/g, "");
//     for (let i = 0; i < string.length; i++) {
//         let letter = string[i]
//         if (!charMap[letter]) {
//             charMap[letter] = 1
//         }
//         else {
//             charMap[letter]++;
//         }
//     }
//     return charMap
// }

