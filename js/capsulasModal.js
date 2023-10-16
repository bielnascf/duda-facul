import { descricaoCapsula, imagemVazia } from './capsulas.js'

const capsulasButton = document.querySelector('.capsula')
const modalWrapperCapsulas = document.querySelector('.modal-wrapper-capsulas')
const closeModalCapsulas = document.querySelector('.close-modal-capsulas') 

capsulasButton.addEventListener('click', () => {
    modalWrapperCapsulas.classList.add('open')
})

closeModalCapsulas.addEventListener('click', () => {
    modalWrapperCapsulas.classList.remove('open')
    descricaoCapsula.style.display = 'none'
    imagemVazia.style.display = 'block'
})