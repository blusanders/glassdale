import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "./../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

//get data for note form drop down
export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const criminalSelectArray = useCriminals()
        render(criminalSelectArray)})
}

//render note form to the DOM with the list of criminals in the dropdown
const render = (criminalSelectArray) => {

    contentTarget.innerHTML = 

    `<form class=noteForm>

        <label for=noteAuthor>Author:</label><br>
        <input type="text" id="noteAuthor"><br>

        <label for=noteText>Note:</a></label><br>
        <textarea id="noteText"></textarea><br>
        
        <label for=noteForm--criminal>Criminal:</label><br>

        <select id="noteForm--criminal" class="criminalSelect">
        <option value=0>Select a criminal</option>

        ${criminalSelectArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join(",")}

        </select>

        <br>
        <label for=noteTimestamp>Date:</label><br>
        <input type="date" id="noteTimestamp"><br><br>
        
        <button id="saveNote">Save Note</button>
    
        </form>
    `
}


//listen for save click and save note to JSON file
eventHub.addEventListener("click", clickEvent => {
clickEvent.preventDefault(); 
    if (clickEvent.target.id === "saveNote") {
        const newNote = {
            author: document.getElementById("noteAuthor").value,
            text: document.getElementById("noteText").value,
            suspect: parseInt(document.getElementById("noteForm--criminal").value),
            timestamp: document.getElementById("noteTimestamp").value,
        }
        //console.log(newNote)
        saveNote(newNote);
    }
})

