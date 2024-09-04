export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento)
    this.activeClass = activeClass
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
    this.HorarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
  }


  dadosAgora() {
    this.dataAgora = new Date()
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    let horarioAberto = (this.horarioAgora >= this.HorarioSemana[0] && this.horarioAgora < this.HorarioSemana[1])
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass)
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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