// 일반 함수 버전
console.log((function (a, b) {
	return a + b
})(10, 24))

// 화살표 버전
console.log(((a, b) => {
	return a + b
	},(10, 24)))