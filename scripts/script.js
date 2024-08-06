const botao = document.getElementById('enviar')

function calcular() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    
    const pessoadoCalculo = new Pessoa(peso, altura)

    let imc = pessoadoCalculo.imc
    let faixa = pessoadoCalculo.mostrarFaixa()

    alert(`Imc: ${imc}, então: ${faixa}`)
}

botao.addEventListener('click', calcular)