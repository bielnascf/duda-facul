const apresentacaoButton = document.querySelector('.apresentacao')
const cafeteirasButton = document.querySelector('.cafeteira')

const apresentacaoImagem = document.querySelector('.apresentacao-imagem')
const cafeteirasMenu = document.querySelector('.cafeteiras')

apresentacaoButton.addEventListener('click', () => {
    apresentacaoImagem.style.display = 'block'
    cafeteirasMenu.style.display = 'none'
})

cafeteirasButton.addEventListener('click', () => {
    apresentacaoImagem.style.display = 'none'
    cafeteirasMenu.style.display = 'block'
})