// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Pseudo Code: Example given array [4,3,1,2]

// Instantiate a swaps counter for your return statement
// Set the length of the array into a variable if not given as argument, let length = arr.length => 4
// Instantiate a hash map
// Instantiate a new Array that is the lenght of our given array, and populate with false values to start

// Iterate through the array and assign key value pairs so that they are "Value" = Position, 3: 2, value 3 is in position 2.
// JS will type coerce number intro string keys for you, Example = { '1': 3, '2': 4, '3': 2, '4': 1 }

const arr1 = [4, 3, 1, 2]

// function minimumSwaps(arr) {
//     let swaps = 0
//     let length = arr.length
//     let arrDict = {}
//     let edges = 0
//     let checked = new Array(length).fill(false)
//     let visits = 0 // Could use this for the condition in a while loop.
//     let index = 1 // In case I need it for when iterating over arrDict object

//     arr.forEach((number, i) => {
//         arrDict[number] = i + 1
//     })

//     for (const value in arrDict) {

//         if (arrDict[value] !== value) {
//             edges++
//             if (arrDict[arrDict[value] == ])
//         }
//         // console.log(value)
//         // console.log(arrDict[value])
//         // console.log(arrDict[value] !== value)
//     }

//     // console.log(checked)

//     return swaps
// }

//Not an optimized answer seems to be O(nlogn)
// function stoilsky(arr) {
//     let swapCount = 0
//     for (let index = 0; index < arr.length; index++) {
//         const currentInt = arr[index]
//         const position = index + 1
//         if (currentInt !== position) {
//             let indexToSwap
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === position) {
//                     indexToSwap = i
//                     break
//                 }
//             }
//             arr[indexToSwap] = currentInt
//             arr[index] = position
//             swapCount = swapCount + 1
//         }
//     }
//     return swapCount
// }

//Original Optimized Solution
function minimumSwaps(arr) {
    var arrLength = arr.length

    // create two new Arrays 
    // one record value and key separately
    // second to keep visited node count (default set false to all)

    var newArr = []
    var newArrVisited = []
    for (let i = 0; i < arrLength; i++) {
        newArr[i] = []
        newArr[i].value = arr[i]
        newArr[i].key = i
        newArrVisited[i] = false
    }

    // sort new array by value

    newArr.sort(function (a, b) {
        return a.value - b.value
    })

    var swp = 0
    for (let i = 0; i < arrLength; i++) {

        // check if already visited or swapped
        if (newArr[i].key == i || newArrVisited[i]) {
            continue
        }

        var cycle = 0
        var j = i
        while (!newArrVisited[j]) {

            // mark as visited
            newArrVisited[j] = true
            j = newArr[j].key //assign next key
            cycle++
        }
        if (cycle > 0) {
            swp += (cycle > 1) ? cycle - 1 : cycle
        }

    }
    return swp
}


// Disected Optimized Solution Ex: [4,3,1,2]

function minimumSwaps(arr) {
    const arrLength = arr.length
    const newArr = []
    /* [
    [ key: 0, value: 4 ],
    [ key: 1, value: 3 ],
    [ key: 2, value: 1 ],
    [ key: 3, value: 2 ]
    ]*/
    const newArrVisited = []
    // [ false, false, false, false ]

    for (let i = 0; i < arrLength; i++) {
        newArr[i] = []
        newArr[i].key = i
        newArr[i].value = arr[i]
        newArrVisited[i] = false
    }
    // See results of this for loop above

    // Sort newArr by value, this mutates the original array
    newArr.sort(function (a, b) {
        return a.value - b.value
    })
    /* Result
    [
    [ key: 2, value: 1 ],
    [ key: 3, value: 2 ],
    [ key: 1, value: 3 ],
    [ key: 0, value: 4 ]
    ] 
    */

    let swaps = 0

    for (let i = 0; i < arrLength; i++) {
        // Check if already visited or swapped, 
        // Example for i = 0, at newArr[0] does key (2) = 0? or newArrVisited[i] true? Neither is true, so moves on to rest of code.
        if (newArr[i].key == i || newArrVisited[i]) {
            continue
        }

        // We start a new cycle because we know edges will be more than 1
        let cycle = 0
        // J will be reassigned in the while loop below, so that the while loop can continue running
        // until the current cycle ends.
        let j = i
        // j = 0

        // While newArrVisited continues to be false perform these code blocks, so it runs until current cycle ends.
        while (!newArrVisited[j]) {
            //mark as visited
            newArrVisited[j] = true
            // 0: [true, false, false, false]
            // 2: [true, false, true, false]
            // 1: [true, true, true, false]
            // 3: [true, true, true, true]
            j = newArr[j].key
            // 0: j = 2
            // 2: j = 1
            // 1: j = 3
            // 3: j = 0
            cycle++
            // 0: cycle = 1
            // 2: cycle = 2
            // 1: cycle = 3
            // 3: cycle = 4
        }

        if (cycle > 1) {
            swaps += cycle - 1
        }
    }


    // console.log("newArr", newArr)
    // console.log("newArrVisited", newArrVisited)
    return swaps
}

//My Final optimized solution without comments

function minimumSwaps(arr) {
    const arrLength = arr.length
    const newArr = []
    const newArrVisited = []
    let swaps = 0

    for (let i = 0; i < arrLength; i++) {
        newArr[i] = []
        newArr[i].key = i
        newArr[i].value = arr[i]
        newArrVisited[i] = false
    }

    newArr.sort(function (a, b) {
        return a.value - b.value
    })


    for (let i = 0; i < arrLength; i++) {
        if (newArr[i].key == i || newArrVisited[i]) {
            continue
        }

        let cycle = 0
        let j = i

        while (!newArrVisited[j]) {
            newArrVisited[j] = true
            j = newArr[j].key
            cycle++
        }

        if (cycle > 1) {
            swaps += cycle - 1
        }
    }
    return swaps
}

console.log("Function Returns", minimumSwaps(arr1))
// console.assert(minimumSwaps(arr1) === 3)