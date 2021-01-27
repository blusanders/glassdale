const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="noteText">
        <input type="text" id="noteDdate">
        <input type="text" id="noteSuspect">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    // rest of the code here
}