//CARGAR LOS HTML AL JS

const formDiary = document.getElementById('form-diary')
const textEntries = document.getElementById('text-entries')
const inputUrl = document.getElementById('input-url')



//JS DEL FORMULARIO

formDiary.addEventListener('submit', (e) => {

    let entradas = textEntries.value
    let input = inputUrl.value

    e.preventDefault()


    console.log("funciona!")
    console.log(entradas)
    console.log(input)
})