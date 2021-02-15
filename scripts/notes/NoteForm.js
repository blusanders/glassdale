import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";
import { getCriminals, useCriminals } from "./../criminals/criminalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

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

        ${criminalSelectArray.map(criminal => `<option value="${criminal.id}">${criminal.id} - ${criminal.name}</option>`).join(",")}

        </select>

        <br>
        <label for=noteTimestamp>Date:</label><br>
        <input type="date" id="noteTimestamp"><br><br>
        
        <div>
        <div><button id="saveNote">Save Note</button></div>
        <div class=errorMessage id=noteErrorMessage></div>
        </div>
    </form>
    `
}

//listen for save click and save note to JSON file
eventHub.addEventListener("click", clickEvent => {
clickEvent.preventDefault(); 

    //if save note button clicked do the following
    if (clickEvent.target.id === "saveNote") {
        //build new note object
        const newNote = {
            author: document.getElementById("noteAuthor").value,
            text: document.getElementById("noteText").value,
            criminalId: parseInt(document.getElementById("noteForm--criminal").value),
            timestamp: document.getElementById("noteTimestamp").value,
        }
        console.log(newNote)

        //only save note if form filled out
        if (formIsValid()){
            saveNote(newNote);
            clearForm();
            //refresh notes to see new note 
            NoteList();
            //clear error message div
            document.getElementById("noteErrorMessage").innerHTML = ""
            console.log("valid");
        }else{
            //render error message if all fields not filled in
            document.getElementById("noteErrorMessage").innerHTML = "Fill that shit in man"
            console.log("Not valid");
        }
    }
})

//validate note input fields before submitting
const formIsValid = () => {
    if (
        (document.getElementById("noteTimestamp").value != "") &&
        (document.getElementById("noteText").value != "") &&
        (document.getElementById("noteAuthor").value != "") &&
        (parseInt(document.getElementById("noteForm--criminal").value) != 0)
        )
    {
        return true
    }
}

//clear note form after adding note
const clearForm = () => {
    document.getElementById("noteTimestamp").value = "";
    document.getElementById("noteText").value = "";
    document.getElementById("noteAuthor").value = "";
    document.getElementById("noteForm--criminal").value = 0
}