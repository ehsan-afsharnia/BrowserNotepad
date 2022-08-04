// variables
const noteList = document.querySelector('#note-list')


// eventlisteners
eventlisteners()
// form submission
function eventlisteners(){
    document.querySelector('#form').addEventListener('submit', newNote)

    // Remove note
    document.querySelector('#note-list').addEventListener('click',removeNote)
}


// functions

// Adding new note to the list
function newNote(e){
    e.preventDefault()
    // access to the value
    const note = document.querySelector('#note').value

    // create remove element
    const removeBtn = document.createElement('a')
    removeBtn.textContent = 'X'
    removeBtn.classList = 'remove-note'
    

    console.log(removeBtn)
    // create <li> tag
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(note))

    // adding remove btn to the li
    li.appendChild(removeBtn)

    // adding li to the note-list
    noteList.appendChild(li)

    addNoteToLocalStorage(note)
}


// Remove note from list
function removeNote(e) {
    if (e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove()
    } 
}

// Adding note to the local storage
function addNoteToLocalStorage(note){
   
    // Get the notes from localstorage
    const notes = getNotesFromLocalStorage()
   
   // Add new notes to the notes array
    notes.push(note)
    // Add new notes aray to the localstorage

   localStorage.setItem('notes' , JSON.stringify(notes))
   console.log(notes);
}

// Get notes from localstorage

function getNotesFromLocalStorage() {
    let notes;

    //Get previous notes from localstorage

    let getFromLs = localStorage.getItem('notes')
    
    if (getFromLs === null) {
        // if not exist create empty array
        notes = []
    } else {

        // if exist convert to the array
        notes = JSON.parse(getFromLs)
    }
    return notes
}