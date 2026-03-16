//CARGAR LOS HTML AL JS

const formDiary = document.getElementById('form-diary')
const textEntries = document.getElementById('text-entries')
const inputUrl = document.getElementById('input-url')

const entriesContainer = document.getElementById('entries-container')

//CODIGO DEL FORMULARIO

formDiary.addEventListener('submit', (e) => {
    e.preventDefault()

    let entriesText = textEntries.value
    let inputImage = inputUrl.value

    const newEntry = {
        id: Date.now(),
        texto: entriesText,
        imagen: inputImage,
        fecha: new Date().toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || []

    entries.push(newEntry)

    localStorage.setItem('diaryEntries', JSON.stringify(entries))

    console.log("funciona!")
    console.log(entriesText)
    console.log(inputImage)
})
