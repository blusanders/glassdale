import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {

    const allNotesConvertedToStrings = noteArray.map( x =>{
        // convert the notes objects to HTML with NoteHTMLConverter
        NoteHTMLConverter(x);
    }
    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings;
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

