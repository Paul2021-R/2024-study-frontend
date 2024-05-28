class Car {
    constructor(name) {
        this.name = name
    }

    // method
    honk() {
        console.log(`${this.name}이 경적을 울립니다.`)
    }

    // static method 
    static hello() {
        console.log('이것은 자동차 입니다.')
    }

    // setter 
    set age(value) {
        this.carAge = value
    }

    get age() {
        return this.carAge
    }
}

const myCar = new Car('haryu Car')

myCar.honk()

Car.hello() // static ok
// myCar.hello() Uncaught TypeError: myCar.hello is not a function

myCar.age = 32

console.log(myCar.age, myCar.name)

var value = Object.getPrototypeOf(myCar)
console.log(value === Car.prototype)
console.log(Object.getOwnPropertyNames(myCar))
// console.log(Object.getOwnPropertyDescriptor(myCar))
console.log(Object.getOwnPropertyDescriptors(myCar))
console.log(Object.getOwnPropertySymbols(myCar))
