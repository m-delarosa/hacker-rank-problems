/*
Inputs:
s = a string of lowecase letters that is repeated infinite times. "abcabc"
n = an integer

Function Returns:
The number of letter a's in the first n(input) letters.

Example:
s = "abcac"
n = 10,
substring = "abcacabcac"
result = 4 occurences of the letter a in substring

*/

//Sample Inputs
let s = "aba"
let n = 10

//PseudoCode
function pseudo(s, n) {
    //Create the sub string using .repeat()
    //Counter the number of a's in the substring
}

// My Initisl Solution - Timed out when encountering large number tests
// function repeatedString(s, n) {
//     let repeatedString = ""

//     while (repeatedString.length <= n) {
//         repeatedString += s
//     }

//     let trimmedString = repeatedString.substring(0, 10)

//     return (trimmedString.match(/a/g) || []).length
// }



//Best solution I could find
function repeatedString(s, n) {
    const subString = Math.floor(n / s.length)
    const substringOfAs = (s.match(/a/g) || []).length
    const remainder = n % s.length
    const remainderOfAs = s.split('').slice(0, remainder).filter((e) => e === "a").length

    // if (remainder === 0) {
    //     return subString * substringOfAs
    // } else {
    //     return (subString * substringOfAs) + remainderOfAs
    // }

    return remainder === 0
        ? subString * substringOfAs
        : (subString * substringOfAs) + remainderOfAs
}

console.log("Function Returns", repeatedString("a", 100000000000000000))