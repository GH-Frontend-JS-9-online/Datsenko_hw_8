const smallestTransform = num => {
    num = num.toString().split('').map(n => parseInt(n))
    let maxValue = Math.max(...num)
    let minValue = Math.min(...num)
    let stepsCount = 0
    while (true) {
        if (minValue !== maxValue) {
            minValue++
            stepsCount++
            continue
        } else {
            break
        }
    }
    stepsCount = (num.length === maxValue) ? (stepsCount + 1) : stepsCount
    return stepsCount
}

module.exports = smallestTransform





