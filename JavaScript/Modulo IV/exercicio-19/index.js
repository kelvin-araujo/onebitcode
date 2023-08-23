const Author = require("./Author");

const john = new Author('John Doe')
const post = john.writePost('Título do post', 'Lorem ipsum dolor sic...')

post.addComment('Kelvin Araújo', 'Muito bom!')
post.addComment('Lucas', 'Achei interessante!')

console.log(john)
console.log(post)