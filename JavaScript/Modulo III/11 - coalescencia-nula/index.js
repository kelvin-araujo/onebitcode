// Operador de Coalescência Nula (??) ele verifica se o operador é null ou undefined e pula para o próximo. Se não for null nem undefined, ele devolve o operador e encerra. Ele sempre lê da esquerda pra direita

/*
const a = 0 // false

const b = null // false

const c = 'Teste' // true

console.log(a || b || c)

console.log(a ?? b ?? c)
*/ 

let a = 0

let b = a || 42

console.log({a, b})

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})