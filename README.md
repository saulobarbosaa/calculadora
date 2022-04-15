
# 🧮 Calculadora com JavaScript 
Este repositório possui o objetivo de apresentar uma aplicação simples que foi desenvolvida utilizando HTML, CSS e JavaScript.

<Foto>

## 👨‍💻 Sobre o projeto: 

O projeto se baseia em três partes, sendo elas a parte de montagem da estrutura do projeto via HTML, a estilização por meio do CSS e a parte que faz a calculadora 'funcionar' que seria por meio do JS.

### 💀 HTML

Esta parte é básica e consiste basicamente em um *container* que possui um *input* que será por meio dele que será efetuada a saída do cálculo e os botões de números, operadores e outros.

Os elementos da calculadora foram posicionados utilizando uma ```table```, onde, todos os botões de números receberam a mesma classe para que fosse mais simples na hora de utilizá-los no CSS e JavaScript. Os outros botões que possuem funções únicas dentro da calculadora receberam uma classe única.
### 🖌️ CSS

A estilização do projeto baseia-se um ```linear-gradient``` e a centralização dos objetos, padronizando o tamanho dos botões e aumentando a largura dos elementos dentro do *container* principal.

### ⚙️ JavaScript

Agora é a parte principal, pois, existem diversas formas de se desenvolver uma calculadora dessas pois esse tipo de projeto é algo muito abrangente em conteúdos na *internet*, entretanto
resolvi desenvoler ela por meio de uma *factory function* que 'fabricaria' um objeto, dentro dele eu colocaria todos os métodos e atributos de uma calculadora e chamaria os métodos dentro um método principal que
teria a função de efetuar o que o usuário escolhesse.

Além do mais, essa forma foi escolhida para que facilitasse o meu processo de aprendizagem, fazendo com que eu aplicasse
o conhecimento que estou adquirindo de uma forma prática.

#### 📒 Métodos e atributos

Iniciei o código JS com uma *factory function*, dentro dela, criei o atributo *input* que representa a tag com a mesma classe dentro do HTML,
após isso, foi criado um método principal que é responsável por chamar e inicializar todos os outros métodos dentro do objeto, tais como o de inserir o número dentro do *input* ao apertar o botão, limpar o *input* ao clicar no botão "C" e dentre outros

```

inicia() {
            this.cliqueBotoes();
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

```

O método responsável por efetuar o cálculo funciona por meio de um ```eval()``` que efetua o cálculo do que estiver dentro 
do *input*, esse processo é efetuado por meio de um ```try catch``` que caso a conta seja inválida ela não sera feita ou fará com que seja alertado na tela a mensagem ao usuário para que ele tente novamente.

```

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

```
