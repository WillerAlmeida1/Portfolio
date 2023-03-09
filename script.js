const secao = document.querySelector('.teste')
const secaoDois = document.querySelector('.teste-dois')
const btn = document.querySelectorAll('button')

btn[0].addEventListener('click', () => {
    secao.innerText = 'Ola eu sou um texto'
})

btn[1].addEventListener('click', () => {
    secao.innerText = 'Outro texto'
})

