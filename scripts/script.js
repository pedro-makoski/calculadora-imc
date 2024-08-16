const botao = document.getElementById('enviar')
const modal = document.getElementById('modal')
const estatus = document.getElementById('status')
const valor = document.getElementById('valor')
const botao_fechar = document.getElementById('fechar')

botao_fechar.onclick = () => {
    modal.style.animation = 'close 1s forwards'
}

modal.addEventListener('animationend', (e) => {
    if(e.animationName === 'close') {
        modal.close()
        modal.classList.remove('open')
        modal.style.animation = 'none'
    }
})

function abrirModal(titulo, texto) {
    modal.showModal()
    modal.classList.add('open')
    modal.style.animation = 'open 2s forwards'

    estatus.innerHTML = titulo
    valor.innerHTML = texto    
}

function calcular() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    
    const pessoadoCalculo = new Pessoa(peso, altura)

    let imc = pessoadoCalculo.imc
    let faixa = pessoadoCalculo.mostrarFaixa()

    abrirModal(faixa, `Imc: ${imc.toFixed(2)}`)
}

botao.addEventListener('click', calcular)