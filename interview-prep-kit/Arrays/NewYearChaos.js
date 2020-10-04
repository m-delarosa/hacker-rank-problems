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

// function minimumBribes(q) {
//     let bribes = 0

//     for (let i = 0; i < q.length; i++) {
//         if (q[i] > [i + 1]) {
//             if (q[i] - [i + 1] === 1) bribes++
//             else if (q[i] - [i + 1] === 2) bribes += 2
//             else if (q[i] - [i + 1] > 2) return console.log("Too chaotic")
//         }
//     }

//     console.log(bribes)
// }

//Dooesn't work
// function minimumBribes(q) {
//     let bribes = 0

//     for (let i = 0; i < q.length; i++) {
//         if (q[i] > [i + 1]) {
//             if (q[i] - q[i + 1] === 1) bribes++
//             else if (q[i] - q[i + 1] === 2) bribes += 2
//             else if (q[i] - q[i + 1] > 2) return console.log("Too chaotic")
//         }
//     }

//     console.log(bribes)
// }

//found solution
function minimumBribes(q) {
    let total = 0

    for (let current_pos = 0; current_pos < q.length; current_pos++) {
        //Getting original position starting at 0, so 1 at q[0] will equal 0
        const original_pos = q[current_pos] - 1
        // diff = ho wmaany positions a person has moved. If 1 at q[0], 0-0=0 positions moved,
        // if 2 at q[0] 1-0=1 position moved.
        const diff = original_pos - current_pos

        //if person had moved more than 2 spots, than impossible
        if (diff > 2) return console.log("Too chaotic")

        //If person has not moved up at all or has actually moved down.
        if (diff <= 0) {
            //check each person starting from one person ahead of original pos up until current position
            for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
                const start_pos_of_forward_person = q[i] - 1
                if (start_pos_of_forward_person > original_pos) {
                    total++
                }
            }
        }
    }
    console.log(total)
}


console.log("q", minimumBribes(q))
console.log("chaoticQ", minimumBribes(chaoticQ))

