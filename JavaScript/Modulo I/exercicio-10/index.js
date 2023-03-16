const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce (function (textoFinal, vaga, indice) {
    // 1. nome, (x candidatos)  
    textoFinal += indice + '. ' 
    textoFinal += vaga.nome
    textoFinal += ' (' + vaga.candidatos.length + 'candidatos)\n'
  })
}