const capsulas = document.querySelectorAll('.capsulas')
const arrayCapsulas = Array.from(capsulas)

export const descricaoCapsula = document.querySelector('.descricao-capsula')
const nomeCapsula = document.querySelector('.nome-capsula')
const imagemCapsula = document.querySelector('.imagem-capsula')
const quantidadeCapsula = document.querySelector('.quantidade-capsulas')
const precoCapsula = document.querySelector('.preco-capsulas')

export const imagemVazia = document.getElementById('imagem-vazia')

arrayCapsulas.map((capsula) => {
    capsula.addEventListener('click', () => {
        imagemVazia.style.display = 'none'
        descricaoCapsula.style.display = 'flex'
        nomeCapsula.innerText = capsula.textContent
        if(capsula.textContent === 'Espresso') {
            imagemCapsula.src = './assets/capsula1.jpeg'
            quantidadeCapsula.innerText = 'QTD: 10'
            precoCapsula.innerText = 'Preço: R$ 18,00'
        }
        if(capsula.textContent === 'Intenso') {
            imagemCapsula.src = './assets/capsula2.jpeg'
            quantidadeCapsula.innerText = 'QTD: 10'
            precoCapsula.innerText = 'Preço: R$ 19,00'
        }
        if(capsula.textContent === 'Forza / Vibrante') {
            imagemCapsula.src = './assets/capsula5.jpeg'
            quantidadeCapsula.innerText = 'QTD: 30'
            precoCapsula.innerText = 'Preço: R$ 44,00'
        }
        if(capsula.textContent === 'Três Cor. Intenso') {
            imagemCapsula.src = './assets/capsula4.jpeg'
            quantidadeCapsula.innerText = 'QTD: 10'
            precoCapsula.innerText = 'Preço: R$ 20,00'
        }
        if(capsula.textContent === 'Lor Forza') {
            imagemCapsula.src = './assets/capsula3.jpeg'
            quantidadeCapsula.innerText = 'QTD: 10'
            precoCapsula.innerText = 'Preço: R$ 21,00'
        }
    })
})
