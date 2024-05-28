// 함수를 매개변수로 받는 대표적인 고차 함수 Array.prototype.map
const doubledArray = [1,2,3].map((item) => item * 2)

console.log(doubledArray)

// 함수를 반환하는 고차 함수의 예 
const add = function (a) {
    return function (b) {
        return a + b
    }
}

console.log(add(2)(5))