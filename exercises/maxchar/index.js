// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const strArr = str.split('');
//     let uniques = [...new Set(strArr)];
//     let mostPrevalent = '';
//     let maxCount = 0;
//     for (let i = 0; i < uniques.length; i++) {
//         let currentCount = 0
//         let currentChar = uniques[i];
//         for (let j = 0; j < str.length; j++) {
//             let letter = str[j];
//             if (letter === currentChar) {
//                 currentCount++
//             }
//         }
//         if (currentCount > maxCount) {
//             maxCount = currentCount;
//             mostPrevalent = currentChar;
//         }
//     }
//     return mostPrevalent;
// }

function maxChar(str) {
    let letterObj = {};
    str.split('').forEach((letter) => {
        if (!letterObj[letter]) {
            letterObj[letter] = 1;
        } else {
            letterObj[letter]++;
        }
    })
    let mostPrevalent = '';
    let maxCount = 0;
    for (let letter in letterObj) {
        if (letterObj[letter] > maxCount) {
            mostPrevalent = letter;
            maxCount = letterObj[letter]
        }
    } 
    return mostPrevalent;
}

module.exports = maxChar;
