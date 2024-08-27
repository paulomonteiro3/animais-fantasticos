export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const HorarioSemana = funcionamento.dataset.horario.split(',').map(Number)

console.log(diasSemana)

const dataAgora = new Date()
const diaAgora = dataAgora.getDay()
const horarioAgora = dataAgora.getHours()
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;


let horarioAberto = (horarioAgora >= HorarioSemana[0] && horarioAgora < HorarioSemana[1])

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto')
}
}



// Aula

// const agora = new Date()
// const futuro = new Date('Dec 24 2025')

// console.log(agora.getMonth())

// console.log(futuro)

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000)
// }

// const diasAgora = transformarDias(agora.getTime())
// const diasFuturo = transformarDias(futuro.getTime())

// console.log(transformarDias(agora.getTime()))

// console.log(diasFuturo - diasAgora)
// console.log(futuro.getTime())