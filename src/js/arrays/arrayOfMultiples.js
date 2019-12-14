const arrayOfMultiples = (num, length) => {
    let result = []       
    for (let i = num; i < (num * length) + num; i += num) {       
        result.push(i)
    }
    return result
}

module.exports = arrayOfMultiples

