console.log('fibonacci')

function fibs(seq) {
	const arr = [0, 1]
	if (arr.length >= seq) return arr.slice(0, seq)
	for(let i = 2; i<seq; i++) {
		arr.push(arr[i-1]+arr[i-2])
	}
	return arr
}

function fibsRec(seq, arr = [0, 1]) {
	if (arr.length >= seq) return arr.slice(0, seq);
	return fibsRec(seq, [...arr, arr.at(-1) + arr.at(-2)])
}

console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(8))

console.log(fibsRec(1))
console.log(fibsRec(2))
console.log(fibsRec(8))