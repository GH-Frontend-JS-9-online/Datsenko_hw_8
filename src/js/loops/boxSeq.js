const boxSeq = step => {
    let result = (step === 0)
     ? 0 
     : (step % 2 === 0)
     ? step
     : step + 2
    return result
}

module.exports = boxSeq