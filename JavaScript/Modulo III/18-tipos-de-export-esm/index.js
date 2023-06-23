import { inline } from './inline.js'
import defaultInline from './inline.js'
import exportDefault, { group, a, b, c, d } from './non-inline.js'

inline()
defaultInline()

group()
exportDefault()

// export nomeado não pode ter um nome diferente da função criada. A não ser que voce use o codigo { nomeDaFuncao as f}. Nesse caso estamos permitindo usar o i como nome do import.

// export default permite usar um nome diferente da função e até mesmo importar funções anonimas, porém so posso uma o export default uma vez no codigo.