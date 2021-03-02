import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { getCriminals, useCriminals } from './../criminals/CriminalDataProvider.js'
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

eventHub.addEventListener("noteStateChangedEvent", clickEvent => {
    if(contentTarget.innerHTML !== "") { NoteList() } ;
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        // debugger
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        return NoteHTMLConverter(note,relatedCriminal)
    }).join("")
}

//get all notes and criminals
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}

