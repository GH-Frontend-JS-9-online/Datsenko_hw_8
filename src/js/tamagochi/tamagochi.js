import getRandomInt from './randomInt.js'


export default class Tamagochi {
    constructor() {
        this.food = getRandomInt(50, 100)
        this.clean = getRandomInt(50, 100)
        this.happiness = getRandomInt(50, 100)
    }

    eat() {
        this.food += 30
        this.clean -= 20 
    }

    wash() {
        this.clean += 40
        this.happiness -= 20
    }

    run() {
        this.happiness += 15
        this.food -= 10
    }   

    getFood() { 
        this.food = this.checkValue(this.food)             
        return this.food
    }

    getHappiness() { 
        this.happiness = this.checkValue(this.happiness)               
        return this.happiness
    }

    getClean() { 
        this.clean = this.checkValue(this.clean)      
        return this.clean
    } 
    
    checkValue(value) {
        return (value >= 100) ? 100 : (value <=0) ? 0 : value 
    }

}