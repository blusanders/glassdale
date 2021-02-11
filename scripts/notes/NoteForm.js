import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "./../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalSelectArray) => {

    contentTarget.innerHTML = 

    `<form class=noteForm>
    <fieldset class=noteFieldset>
        <label for=noteAuthor>Author:</a><br>
        <input type="text" id="noteAuthor"><br>

        <label for=noteAuthor>Note:</a><br>
        <textarea id="noteText"></textarea><br>
        
        <label for=noteAuthor>Criminal:</a><br>

        <select id="noteForm--criminal" class="criminalSelect">
        <option value=0>Select a criminal</option>

        ${
            criminalSelectArray.map(criminal => {
                return `<option value="${criminal.id}">${criminal.name}</option>`
            })
        }

        </select>

        <br>
        <label for=noteTimestamp>Date:</a><br>
        <input type="date" id="noteTimestamp"><br><br>
        
        <button id="saveNote">Save Note</button>
    
    </fieldset>
    </form>
    `
}

//call note form to render to DOM
export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const criminalSelectArray = useCriminals()
        render(criminalSelectArray)})
}

//listen for save click and save note to JSON file
eventHub.addEventListener("click", clickEvent => {
clickEvent.preventDefault(); 
    if (clickEvent.target.id === "saveNote") {
        const newNote = {
            author: document.getElementById("noteAuthor").value,
            text: document.getElementById("noteText").value,
            // suspect: document.getElementById("noteSuspect").value,
            timestamp: document.getElementById("noteTimestamp").value,
        }

        saveNote(newNote);
    }
})

