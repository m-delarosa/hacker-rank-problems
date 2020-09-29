
let clouds = [0, 0, 1, 0, 0, 1, 0]

function jumpingOnClouds(clouds) {
    let jumps = 0
    let playerPosition = 0

    while (playerPosition < clouds.length - 1) {
        if (playerPosition + 2 === clouds.length || clouds[[playerPosition + 2] === 1]) {
            playerPosition++
            jumps++
        } else {
            playerPosition += 2
            jumps++
        }
    }
    return jumps
}

console.log("Function Returns", jumpingOnClouds(clouds))