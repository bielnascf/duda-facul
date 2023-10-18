const selectMaquinas = document.querySelector('#imaquinas')
const selectCapsulas = document.querySelector('#icapsulas')

for(let i = 0; i < selectMaquinas.length; i++) {
    console.log(selectMaquinas.options[i])
}

for(let i = 0; i < selectCapsulas.length; i++) {
    console.log(selectCapsulas.options[i])
}