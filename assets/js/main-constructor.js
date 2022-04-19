//Parte javascript criada em objetos com objetivo em por em prática
//os conceito envolvendo POO em programação web

function Calculadora() {
    
        this.input = document.querySelector('.input');
        
        this.inicia = () => this.cliqueBotoes();

        this.btnEscreveInput = (valor) => this.input.value += valor;

        this.btnClear = () => this.input.value = '';

        this.inputDel = () => this.input.value = this.input.value.slice(0, -1);


        this.calcula = () => {
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

        }

        this.cliqueBotoes = () => {

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
            return;
        }
}

//Instanciando o objeto

const c1 = new Calculadora();
c1.inicia()

console.log(c1)