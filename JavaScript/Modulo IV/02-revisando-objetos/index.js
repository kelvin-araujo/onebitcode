// PalcalCase -> camelCase
function Book(title, pages, tags, author) {
  this.title = title     // poderia ser qualquer nome
  this.pages = pages     // poderia ser qualquer nome
  this.tags = tags       // poderia ser qualquer nome
  this.author = author   // poderia ser qualquer nome
  this.published = false 
  this.inStock = 0
  this.addOnStock =  function addOnStock(quantity) {
    this.inStock += quantity
  }
  this.save = function () {
    // salva no banco de dados
  }
}

const author = { name: 'Christopher Paolini'}
const tags = ['fantasy', 'adventure']

const eragon = new Book('Eragon', 468, tags, author) 

console.log(eragon)

const eldest = new Book('Eldest', 644, tags, author)

console.log(eldest)
