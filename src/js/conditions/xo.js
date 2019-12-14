function XO(str) {
    let amauntX = 0
    let amauntO = 0
    str = str.toLowerCase().split('')    
    if (!str.includes('x') & !str.includes('o')) {
        return true
    } else if (!str.includes('x') || !str.includes('o')) {
        return false
    } else {
        for (let i = 0; i < str.length; i++) {            
            if (str[i] === 'x') {
                amauntX++ 
            }
            else if (str[i] === 'o') {
                amauntO++
            }
        }
        let result = (amauntX === amauntO)
        return result
    }   
}

module.exports = XO
