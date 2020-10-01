//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const testCase0 =
    [[1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]]

const expectedOutput0 = 19

function hourglassSum(arr) {
    let sumList = []

    for (let row = 0; row < 4; row++) {
        for (let i = 0; i < 4; i++) {
            let hourGlass = []
            hourGlass.push(arr[row][i],
                arr[row][i + 1],
                arr[row][i + 2],
                arr[row + 1][i + 1],
                arr[row + 2][i],
                arr[row + 2][i + 1],
                arr[row + 2][i + 2])
            sumList.push(hourGlass.reduce((sum, value) => sum + value, 0))
        }
    }

    return Math.max(...sumList)
}

console.log("Function Returns", hourglassSum(testCase0))