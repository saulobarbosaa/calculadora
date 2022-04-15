//Parte javascript criada em objetos com objetivo em por em prática
//os conceito envolvendo POO em programação web

function criaCalculadora() {
    return{
        input: document.querySelector('.input'),
        
        inicia() {
            this.cliqueBotoes();
        },

        btnEscreveInput(valor) {
            this.input.value += valor;
        },

        btnClear() {
            this.input.value = '';
        },

        inputDel() {
            this.input.value = this.input.value.slice(0, -1);
        },

        calcula() {
            let conta = this.input.value;

            try{
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.input.value = conta;
            }
            catch(e) {
                alert('Conta inválida')
                this.input.value = '';
                return;
            }

        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnEscreveInput(el.innerHTML);
                }

                if(el.classList.contains('btn-clear')) {
                    this.btnClear();
                }

                if (el.classList.contains('btn-del')) {
                    this.inputDel();
                }

                if(el.classList.contains('btn-eq')) {
                    this.calcula();
                }
            })
        },

        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();