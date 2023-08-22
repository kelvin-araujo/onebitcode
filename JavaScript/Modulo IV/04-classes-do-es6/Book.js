class Book {
  constructor(title) {
    this.title = title
    this.published = false
  }

  publish() {
    this.published = true  // Método para publicar o livro
  }
}

const eragon = new Book('Eragon')
const eldest = new Book ('Eldest')

eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)    // Verifica se a instancia ( eragon ) faz parte da classe ( Book ).