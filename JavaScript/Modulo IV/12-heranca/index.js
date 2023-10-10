class Property {
  constructor(area, price) {
    this.area = area
    this.price = price
  }
  
  getPricePerSquareMeter() {
    return this.price / this.area
  }
}

class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

class Apartament extends Property {
  constructor (number, area, price) {
    super(area, price) 
    this.number = number
  }

  getFloor() {
    return this.number.slice(0, -2)
  }
}

const apt = new Apartament('201', 100, 160000)

console.log(apt)
console.log(apt.getPricePerSquareMeter())
console.log(apt.getFloor())

/* Herança é quando voce reutiliza as propriedades da classe mãe ( superclass ) nas subclasses (subclass). Os exemplos acima mostram isso. A classe mãe é Property e as subclasses são House e Apartament. No caso de Apartament, ele reutilizou o area e price e acrescentou o number. Para fazer isso é necessário reescrever as propriedades no constructor e referenciar elas utilizando o atributo global super, após você pode escrever os atributos que serão exclusivos dela. */