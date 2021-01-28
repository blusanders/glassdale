import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteList")

eventHub.addEventListener("showNotesClicked", customEvent => {
    debugger
    NoteList()
})

const render = (noteArray) => {
const allNotesConvertedToStrings = noteArray.map(
debugger
    // convert the notes objects to HTML with NoteHTMLConverter
        return NoteHTMLConverter(noteArray);
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

