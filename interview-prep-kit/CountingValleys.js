// Rules
// Each hike starts and ends at sea level
// Each step is either Uphill or Downhill
// Mountain is defined as any # of steps up and then back down to sea level.
// Valleys are defined as # of steps down and back up to sea level

// Goal 
// Find and print the number of valleys walked through on hike.

// Parameters
// int steps: the # of steps taken on the hike, ex: 8
// string path: a string describing the path, "UDDDUDUU"

// Sample Test
const steps = 8
const path = "UDDDUDUU"

function countingValleys(steps, path) {
    let currentAltitude = 0
    let altitudeProfile = []
    let valleysHiked = 0

    for (let i = 0; i < steps; i++) {
        path[i] === "U" ? currentAltitude += 1 : currentAltitude -= 1
        altitudeProfile.push(currentAltitude)
        if (currentAltitude === 0 && Math.sign(altitudeProfile[i - 1]) === -1) valleysHiked++
    }

    return valleysHiked
}

console.log("Function Returns", countingValleys(steps, path))
