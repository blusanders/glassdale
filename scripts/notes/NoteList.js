import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList");
const eventHub = document.querySelector(".container");

let notesFlag = false;

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
    notesFlag = true;
})

eventHub.addEventListener("noteStateChangedEvent", clickEvent => {
    if (notesFlag === true) { NoteList() } ;
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map( noteObj => NoteHTMLConverter(noteObj)).join("");
    contentTarget.innerHTML = allNotesConvertedToStrings;
}

//Renders all notes
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

