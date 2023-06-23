// O operador de encadeamento opcional ?. permite a leitura do valor de uma propriedade localizada internamente em uma cadeia de objetos conectados, sem que a validação de cada referência da cadeia seja expressivamente realizada.


const user = {
  name: 'John Doe',
  email: 'doejohn@email.com',
  friends: [{
    name:'Mary',
    address: {
      street: 'Some Street',
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: '+55',
    ddd: '22',
    number: '998765432'
  }
}

//console.log(user.friends[0].phone.ddd)
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)

//Quando colocamos o ?. , o JS verifica se existe essa propriedade ou valor, se não houver, o sistema não da erro, e sim retorna undefined.