import { getNotes, useNotes } from "./NoteDataProvider.js";
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

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        return NoteHTMLConverter(note,relatedCriminal)
    })
}

//get all notes and criminals
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
// debugger
            render(notes, criminals)
        })
}

