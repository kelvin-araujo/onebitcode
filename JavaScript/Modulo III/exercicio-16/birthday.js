const dayjs = require('dayjs')

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()

  const ageInYears = today.diff(birthday, 'year') // Diferença dia atual - aniversário
  const nextBirthday = birthday.add(ageInYears + 1, 'year') // aniversário + idade em anos + 1 ano
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1 // Diferença próximo aniversário - dia atual + 1 dia pra contar o dia de hoje

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday} dias`)
}

birthday('1998-12-17')