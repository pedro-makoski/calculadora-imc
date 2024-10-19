class Pessoa {
    constructor(peso, altura) {
        this.peso = peso
        this.altura = altura;

        if(isNaN(this.peso)) {
            this.peso = this.peso.replace(',', '.')

            this.peso = parseFloat(this.peso)
        }

        if(isNaN(this.altura)) {
            this.altura = this.altura.replace(',', '.')

            this.altura = parseFloat(this.altura)
        }

        this.imc = this.peso/(this.altura**2)
    }

    mostrarFaixa() {
        if(this.imc <= 16.9) {
            this.faixa = 'Muito abaixo do peso'
            return this.faixa 
        }

        if(this.imc <= 18.4) {
            this.faixa = 'Abaixo do peso'
            return this.faixa
        }

        if(this.imc <= 24.9) {
            this.faixa = 'Peso normal'
            return this.faixa
        }

        if(this.imc <= 29.9) {
            this.faixa = 'Acima do peso'
            return this.faixa
        }

        if(this.imc <= 34.9) {
            this.faixa = 'Obesidade grau I'
            return this.faixa
        }

        if(this.imc <= 40) {
            this.faixa = 'Obesidade grau II'
            return this.faixa
        }

        this.faixa = 'Obesidade grau III'
        return this.faixa
    }
}