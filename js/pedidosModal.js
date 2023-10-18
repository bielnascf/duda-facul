const pedidosButton = document.querySelector('.pedidos')
const modalWrapperPedidos = document.querySelector('.modal-wrapper-pedidos')
const closeModalPedidos = document.querySelector('.close-modal-pedidos')

pedidosButton.addEventListener('click', () => {
    modalWrapperPedidos.classList.add('open')
})

closeModalPedidos.addEventListener('click', () => {
    modalWrapperPedidos.classList.remove('open')
})