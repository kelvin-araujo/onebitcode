// Rest params nos permite representar um número indefinido de parâmetros como um array.

function sum(...numbers) {
 return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2))
console.log(sum(32, 5, 74, 7, 1, 9, 90))

// Devido considerar o parâmetro da function sum como um array, o JS permite usar HOF, como por exemplo o reduce.