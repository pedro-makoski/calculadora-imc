const botao = document.getElementById('enviar')
const modal = document.getElementById('modal')
const estatus = document.getElementById('status')
const valor = document.getElementById('valor')
const botao_fechar = document.getElementById('fechar')

botao_fechar.onclick = () => {
    modal.close()
    modal.style.display = 'none'
}

function abrirModal(titulo, texto) {
    modal.showModal()
    modal.style.display = 'flex'

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