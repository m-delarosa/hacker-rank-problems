// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
//Pseudo

//Instantiate deletions array

// Iterate over string a converted into an array



//Return deletions array length

const strA = "fcrxzwscanmligyxyvym"
const strB = "jxwtrhvujlmrpdoqbisbwhmgpmeoke"

// Solution 1 worked for 2 out of 3 cases, but did not account for character frequency
// function makeAnagram(a, b) {
//     const arrA = a.split("")
//     const arrB = b.split("")
//     const deletionsA = arrA.filter(char => !arrB.includes(char))
//     const deletionsB = arrB.filter(char => !arrA.includes(char))

//     return deletionsA.length + deletionsB.length
// }

//My solution
// function makeAnagram(a, b) {
//     const arrA = a.split("")
//     const arrB = b.split("")
//     let deletions = 0
//     let dictA = {}
//     let dictB = {}
//     let shortestDict = arrA.length <= arrB.length ? dictA : dictB
//     let longestDict = arrA.length > arrB.length ? dictA : dictB
//     arrA.forEach(char => dictA[char] ? dictA[char]++ : dictA[char] = 1)
//     arrB.forEach(char => dictB[char] ? dictB[char]++ : dictB[char] = 1)

//     for (const char in shortestDict) {
//         if (shortestDict[char] === longestDict[char]) {
//             shortestDict[char] = 0
//             longestDict[char] = 0
//         }

//         if (shortestDict[char] !== 0 && shortestDict[char] < longestDict[char]) {
//             longestDict[char] = longestDict[char] - shortestDict[char]
//             shortestDict[char] = 0
//         }

//         if (shortestDict[char] > longestDict[char]) {
//             shortestDict[char] = shortestDict[char] - longestDict[char]
//             longestDict[char] = 0
//         }
//     }

//     for (const char in shortestDict) {
//         deletions += shortestDict[char]
//     }

//     for (const char in longestDict) {
//         deletions += longestDict[char]
//     }

//     return deletions
// }

//Glitched Failure Solution, he comapres the differenace in characters by only using the longest. Better solution for sure.
function makeAnagram(a, b) {
    //Identifies shorter and longer string same as me, but keeps it as string
    const larger = a.length >= b.length ? a : b
    const smaller = a.length < b.length ? a : b

    // stores character counts in hash map for only the larger string
    const storage = {}
    for (const letter of larger) {
        storage[letter] = (storage[letter] || 0) + 1
    }

    // Intialize counter for similar characters
    let counter = 0

    // loop through second/smaller string to find count of similar characters
    for (const letter of smaller) {
        if (storage[letter] && storage[letter] > 0) {
            storage[letter]--
            counter++
        }
    }

    //Math Logic
    // Calculate the number of characters that did not match
    const diffOfSmaller = smaller.length - counter
    //Calculate the number of chars that would be natural reminder of the larger
    const diffOfLarger = larger.length - smaller.length

    return (2 * diffOfSmaller) + diffOfLarger
}


console.log("Function Returns", makeAnagram(strA, strB))