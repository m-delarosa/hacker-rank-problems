// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.

// Constraints

//  where 
// Output Format

// Return the total number of matching pairs of socks that Alex can sell.

// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output

// 3

const n = 9
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0
    let occurences = {}

    for (let i = 0; i < n; i++) {
        occurences[ar[i]] = (occurences[ar[i]] || 0) + 1
    }

    const values = Object.values(occurences)

    for (let i = 0; i < values.length; i++) {
        pairs = pairs + Math.floor(values[i] / 2)
    }

    return pairs
}

console.log(sockMerchant(n, socks))