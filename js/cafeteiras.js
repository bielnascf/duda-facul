const cafeteiras = document.querySelectorAll('.cafeteiras button')
const arrayCafeteiras = Array.from(cafeteiras)

const modalWrapperCafeteiras = document.querySelector('.modal-wrapper-cafeteiras')
const closeModalCafeteiras = document.querySelector('.close-modal-cafeteiras')

const modeloCafeteira = document.querySelector('.title')
const descricaoCafeteira = document.querySelector('.descricao-cafeteira')
const precoCafeteira = document.querySelector('.preco')
const imagemCafeteira = document.querySelector('.imagem-cafeteira')

arrayCafeteiras.map((cafeteira) => {
    cafeteira.addEventListener('click', () => {
        modalWrapperCafeteiras.classList.add('open')
        modeloCafeteira.innerText = cafeteira.textContent
        if(cafeteira.textContent === 'Mini ME') {
            imagemCafeteira.src = '../assets/cafeteira1.jpeg'
            descricaoCafeteira.innerText = 'Cápsula: Dolce Gusto'
            precoCafeteira.innerText = 'Preço: R$ 480,00'
        }
        if(cafeteira.textContent === 'Genio S Plus') {
            imagemCafeteira.src = '../assets/cafeteira2.jpeg'
            descricaoCafeteira.innerText = 'Cápsula: Dolce Gusto'
            precoCafeteira.innerText = 'Preço: R$ 530,00'
        }
        if(cafeteira.textContent === 'Inissia') {
            imagemCafeteira.src = '../assets/cafeteira3.jpeg'
            descricaoCafeteira.innerText = 'Cápsula: Nespresso'
            precoCafeteira.innerText = 'Preço: R$ 500,00'
        }
        if(cafeteira.textContent === 'LOV') {
            imagemCafeteira.src = '../assets/cafeteira4.jpeg'
            descricaoCafeteira.innerText = 'Cápsula: Três Corações'
            precoCafeteira.innerText = 'Preço: R$ 400,00'
        }
    })
})

closeModalCafeteiras.addEventListener('click', () => {
    modalWrapperCafeteiras.classList.remove('open')
})