//Parte javascript criada em objetos com objetivo em por em prática
//os conceito envolvendo POO em programação web

function criaCalculadora() {
    return{
    
    input: document.querySelector('.input'),

    start() {
        this.inputClick()
    },

    writeInput(value) {
        this.input.value += value
    },

    inputClear() {
        this.input.value = ''
    },

    inputDel() {
        let del = this.input.value.slice(0, -1) 
        this.input.value = del
    },

    calculate() {
        math = this.input.value


        try {
            math = eval(math)

            if(!math) {
                alert('Conta inválida, tente novamente')
                this.inputClear()
                return
            }
            else this.input.value = math;
        } catch(e) {
            if(!math) {
                alert('Conta inválida, tente novamente')
                this.inputClear()
                return
            }
        }
    },
    
    inputClick() {
        document.addEventListener('click', e => {
            const el = e.target

            if(el.classList.contains('btn-num')) {
                this.writeInput(el.innerHTML)
            }

            if(el.classList.contains('btn-clear')) {
                this.inputClear()
            }

            if(el.classList.contains('btn-del')) {
                this.inputDel()
            }

            if(el.classList.contains('btn-eq')){
                this.calculate()
            }


        })
    }

    }
}

const calculadora = criaCalculadora();
calculadora.start();