// variables
const noteList = document.querySelector('#note-list')


// eventlisteners
eventlisteners()
// form submission
function eventlisteners(){
    document.querySelector('#form').addEventListener('submit', newNote)
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
}