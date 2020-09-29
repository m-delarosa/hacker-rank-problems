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