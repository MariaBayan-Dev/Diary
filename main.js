//CARGAR LOS HTML AL JS

const formDiary = document.getElementById('form-diary')
const textEntries = document.getElementById('text-entries')
const inputUrl = document.getElementById('input-url')

const entriesContainer = document.getElementById('entries-container')


//CODIGO DEL FORMULARIO

//FUNCION DEL BOTON

formDiary.addEventListener('submit', (e) => {
    e.preventDefault()

    let entriesText = textEntries.value
    let inputImage = inputUrl.value

    if(!entriesText){
        return
    }

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

    inputUrl.value = ""
    textEntries.value = ""

    renderEntry(newEntry)
})

//CREACION DE LA ENTRADA

const renderEntry = (entry) => {
    const articleHTML = `
        <article class="entries-article" data-id="${entry.id}">
        <img src="${entry.imagen}" alt="Imagen de las entradas">
        <time class="date-entry">${entry.fecha}</time>
        <p class="text-entry">${entry.texto}</p>

        <button class="btn-edit">Editar entrada</button>
        <button class="btn-delete">Borrar entrada</button>
        </article>
    `

    entriesContainer.insertAdjacentHTML('beforeend', articleHTML)
}

//DEJAR LA ENTRADA CARGADA

const loadEntries = () => {
    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || []

    entries.forEach(entry => {
        renderEntry(entry)
    });
}

loadEntries()


//BORRAR ENTRADA

entriesContainer.addEventListener('click', (evento) =>{
    if(evento.target.classList.contains('btn-delete')){
        const article = evento.target.closest('article')
        const entryId = article.dataset.id
        console.log(entryId)

        article.remove()

        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || []

        const updateEntries = entries.filter(entry => entry.id !== Number(entryId))

        localStorage.setItem('diaryEntries', JSON.stringify(updateEntries))
    }
})