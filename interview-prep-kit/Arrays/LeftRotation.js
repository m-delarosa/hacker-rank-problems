const a = [1, 2, 3, 4, 5]
const d = 4
const expectedResult = [5, 1, 2, 3, 4]

//Essentially what we need to is grab the first element in array and set it to be the last "d" number of times.

//Create place to hold the return array. Insert the starting array "a"
//Iterate over the array "d" times. Each time removing the first element in array and adding it to the end.

//Return the return array

function rotLeft(a, d) {
    let rotatedArray = a

    for (let i = 0; i < d; i++) {
        let rotatingValue = rotatedArray[0]
        rotatedArray.shift() //This removes the item from the beginning of the array
        rotatedArray.push(rotatingValue) //This adds it to the end of the array
    }

    return rotatedArray
}

console.log(rotLeft(a, d))