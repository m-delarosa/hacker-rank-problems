//Rules:
// No person can end up more than two positions lower than their starting index. 
// For example, 5 could end in position 3, but not in position 2

// Declare a return variable to hold the # of bribes
// Iterate over the array
// Compare number at index[i] with index[i+1] (initial position)
//If index[i] > index[i+1]
//Differeance is 1 add 1 bribe
//Differeance is 2 add 2 bribes
//Differeance is more than 2, return "Too chaotic"
//If index[i] < index[i+1] ... ignore

const q = [2, 1, 5, 3, 4]
const chaoticQ = [2, 5, 1, 3, 4]

function minimumBribes(q) {
    let bribes = 0

    for (let i = 0; i < q.length; i++) {
        if (q[i] > [i + 1]) {
            if (q[i] - [i + 1] === 1) bribes++
            else if (q[i] - [i + 1] === 2) bribes += 2
            else if (q[i] - [i + 1] > 2) return console.log("Too chaotic")
        }
    }

    console.log(bribes)
}

console.log("q", minimumBribes(q))
console.log("chaoticQ", minimumBribes(chaoticQ))

