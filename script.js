function aplicar() {

  document.querySelector('#dados').innerHTML = ''

  let quantidade = document.querySelector('input#quantidade').value

  localStorage.setItem('input', quantidade)

  if (quantidade <= 1 || quantidade == '') {
    alert('É necessário ter mais que dois números para realizar uma conta!')
    return
  }

  for (let i = 0; i < quantidade; i++) {
    let input = document.createElement('input')
    input.setAttribute('id', `input${i}`)
    document.getElementById('dados').appendChild(input)
  }

}



function realizarSoma() {
  let quantidadeInput = document.querySelector('input#quantidade').value
  let quantidade = localStorage.getItem('input')
  
  if(quantidadeInput != quantidade) {
    alert('Seu aplicar foi modificado, o processo SOMAR so pode continuar se não houver modificações na funcionalidade aplicar, favor retorne ao primeiro número selecionado!')
    return
  }

  if (quantidade <= 1 || quantidade == '') {
    alert('É necessário que a funcionalidade aplicar tenha uma quantidade de número maior que 1!')
    return
  } 

  var valores = []

  for (let i = 0; i < quantidade; i++) {
    valores.push(Number(document.getElementById(`input${i}`).value))
  }

  const resultado = valores.reduce((a, b) => a + b, 0)

  document.getElementById('resultado').innerHTML = `Resultado da soma é: ${resultado}`
}

function realizarSubtracao() {
  let quantidadeInput = document.querySelector('input#quantidade').value
  let quantidade = localStorage.getItem('input')

  if(quantidadeInput != quantidade) {
    alert('Seu aplicar foi modificado, o processo SUBTRAÇÃO so pode continuar se não houver modificações na funcionalidade aplicar, favor retorne ao primeiro número selecionado!')
    return
  }

  if (quantidade <= 1 || quantidade == '') {
    alert('É necessário que a opção aplicar tenha uma quantidade de número maior que 1!')
    return
  } 

  var valores = []

  for (let i = 0; i < quantidade; i++) {
    valores.push(Number(document.getElementById(`input${i}`).value))
  }

  var resultado = 0

  for (let i = 0; i < quantidade - 1; i++) {
    if (i == 0)
      resultado = valores[i] - valores[i + 1]
    else
      resultado -= valores[i + 1]
  }

  document.getElementById('resultado').innerHTML = `Resultado da subtração é: ${resultado}`

}

function limpar() {

  window.location.reload()

}
