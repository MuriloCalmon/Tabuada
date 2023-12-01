//seleção dos elementos
const numberInput = document.querySelector('#number-of-tabuada')
const numberMultiplicatorInput = document.querySelector('#multiplicator')

const button = document.querySelector('.btn')

const result = document.querySelector('.result-multiplication')
//funções


const createTable = (number, multiplicatorNumer) => {
    //limpa a div do template
    result.innerHTML = ''

    //iteração para criar a tabuada onde o i itera até o multiplicator, e multiplica pelo number gerando ex:.(5*1 - 5*2 - 5*3)
    for (let i = 1; i <= multiplicatorNumer; i++) {
        const resultado = number * i

        //Template onde ficará a tabuada
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${resultado}</div>
        </div>
        `
        
        //Instancia uma novo objeto DOMParser
      const parser = new DOMParser()

      // Converte o template String para htmlDocument do tipo texto
      const htmlTemplate = parser.parseFromString(template, "text/html")

      // Seleciona a div row do template
      const row = htmlTemplate.querySelector(".row")

      // Insere o template tabuada na div
      result.appendChild(row)

      }

}

//Eventos

button.addEventListener('click', (e) => {
    const multiplitionNumber = +numberInput.value

    const multiplicatorNumer = +numberMultiplicatorInput.value 

    if (!multiplicatorNumer || !multiplitionNumber) return

    createTable(multiplitionNumber, multiplicatorNumer)
})

