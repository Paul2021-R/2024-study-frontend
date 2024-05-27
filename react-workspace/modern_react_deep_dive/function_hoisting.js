// console.log(typeof sum)

// sum()

const sum = function (a, b) {
	return a + b 
}

console.log(sum(4, 5))

console.log(typeof hello === 'undefined') // true
console.log(typeof hello) // true

// hello() // Uncaught TypeError: hello is not a function

var hello = function () {
	console.log('hello')
}

hello()