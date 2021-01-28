import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <form class=noteForm>
    <fieldset class=noteFieldset>

        <label for=noteAuthor>Author:</a><br>
        <input type="text" id="noteAuthor"><br>

        <label for=noteAuthor>Note:</a><br>
        <textarea id="noteText"></textarea><br>
        
        <label for=noteAuthor>Suspect:</a><br>
        <input type="text" id="noteSuspect"><br>
        
        <label for=noteTimestamp>Date:</a><br>
        <input type="date" id="noteTimestamp"><br><br>
        
        <button id="saveNote">Save Note</button>
    </fieldset>
    </form>
        `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
clickEvent.preventDefault(); 
    if (clickEvent.target.id === "saveNote") {
// debugger
        const newNote = {
            author: document.getElementById("noteauthor").value,
            text: document.getElementById("noteText").value,
            suspect: document.getElementById("noteSuspect").value,
            timestamp: document.getElementById("noteTimestamp").value,
        }

        // Change API state and application state
        saveNote(newNote);
    }
})

