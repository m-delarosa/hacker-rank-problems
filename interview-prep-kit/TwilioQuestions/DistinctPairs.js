// In this challenge, you wi;ll be given an array of integers and a target value.
// Determine the number of distinct pairs of elements in the array that sum up to the target value.
// Two pairs (a, b) and (c, d) are considered to be distinct if and only if the values in sorted order do not match i.e. (1, 9) and (9, 1) are indistinct but (1, 9) and (9, 2) are distinct.

// For Example, given the array [1, 2, 3, 6, 7, 8, 9, 1] and a target value of 10, the seven pairs (1, 9), (2, 8), (3, 7), (8, 2), (9, 1), (9, 1) and (1, 9) all sum to 10 and there are only three distinct pairs: (1, 9), (2, 8), and (3, 7).

// Function Description: Complete the function numberOfPairs in the editor below.
// The function must return an integer, the total number of distinct pairs of elements in the array that sum to the target value.

// numberOfPairs has the following parameter(s):

// a[a[0], ..., a[n-1]]: an array of integers to select the pairs from.
// Constraints:

// 1 <= n <= 5 x 10^5
// 0 <= a[i] <= 10^9
// 0 <= k <= 5 x 10^9
// Input Format for Custom Testing

// The first line contains an integer n, the size of the array a.
// The next n lines each contain an element a[i] where 0 <= i < n.
// The next line contains an integer k, the target value.
// Input Sample Input 0: 6 1 3 46 1 3 9 47

// Pseudo Code

// Create an empty return object (hash map) that will hold the distinct pairs

// Iterate over the array O(n)
//      Slice the array starting the next element until array's end and then loop over the resulting arrray O(n^2)
//      If sum of two numbers === k
//          Intialize a variable "pair" that equals an array, which is sorted in ascending order.(.sort((a,b) => a-b)) O(n^2*log)
//          Intilize a variable "pairKey" = which turns the array into a string (Json.stringify(pair))
//          If pairKey does not already exist in pairs object, then add it to the object with a value of 1

// Return the number of keys in the in the pairs object as the answer.

const n = 8
const array = [1, 2, 3, 6, 7, 8, 9, 1]
const k = 10

function numberOfPairs(n, array, k) {
    let pairs = {}

    array.forEach((number, i) => {
        let otherNumbers = array.slice(i + 1, n)

        otherNumbers.forEach(otherNumber => {
            if (number + otherNumber === k) {
                let pair = [number, otherNumber].sort((a, b) => a - b)
                let pairKey = JSON.stringify(pair)
                if (!(pairKey in pairs)) pairs[pairKey] = 1
            }
        })
    })
    return Object.keys(pairs).length
}

console.log("Function Returns", numberOfPairs(n, array, k))
