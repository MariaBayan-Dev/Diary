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


//BORRAR/EDITAR ENTRADA

entriesContainer.addEventListener('click', (evento) =>{
    if(evento.target.classList.contains('btn-delete')){
        const article = evento.target.closest('article')
        const entryId = article.dataset.id
        console.log(entryId)

        article.remove()

        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || []

        const updateEntries = entries.filter(entry => entry.id !== Number(entryId))

        localStorage.setItem('diaryEntries', JSON.stringify(updateEntries))
    }else if(evento.target.classList.contains('btn-edit')){
        const article = evento.target.closest('article')
        const entryId = article.dataset.id
        const paragraph = article.querySelector('.text-entry')
        const textArea = document.createElement('textarea')
        textArea.value = paragraph.textContent
        paragraph.replaceWith(textArea)

        const updateEntry = article.querySelector('.btn-edit')
        updateEntry.textContent = 'Confirmar'
        updateEntry.className = 'btn-confirm'
        console.log(entryId)
    }else if(evento.target.classList.contains('btn-confirm')){
        const article = evento.target.closest('article')
        const entryId = article.dataset.id
        console.log(entryId)
        const textArea = article.querySelector('textarea')
        const newText = textArea.value
        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || []
        const updateEntries = entries.map(entry => {
            if(entry.id === Number(entryId)){
                return {...entry, texto: newText}
            }
            return entry
        })

        localStorage.setItem('diaryEntries', JSON.stringify(updateEntries))

        const newParagraph = document.createElement('p')
        newParagraph.className = 'text-entry'
        newParagraph.textContent = newText
        textArea.replaceWith(newParagraph)

        const confirmBtn = evento.target
        confirmBtn.textContent = 'Editar entrada'
        confirmBtn.className = 'btn-edit'
    }
})

