//Spread permite expandir objetos iteráveis em elementos individuais ou copiar propriedades de um objeto para outro.

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // console.log(P, r, o, n)

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log( {towns, townsCopy} ) 
// Mesmo removendo e adicionando itens no townsCopy, o towns também é alterado porque o townsCopy é apenas uma referência do towns

const townsClone = [...towns]

townsClone.push('Aldebaram')

console.log({ towns, townsCopy, townsClone })
// Apenas o townsClone foi adicionado o último item. Contudo temos uma cópia do array towns que pode ser modificada sem alterar a original


const townsObj = { ...towns }
const townsObjClone = { ...townsObj }
townsObjClone.test = 'Test'

console.log(townsObj, townsObjClone )

// Só o townsObjClone possui a propriedade test. Ele foi clonado e não alterou o townsObj