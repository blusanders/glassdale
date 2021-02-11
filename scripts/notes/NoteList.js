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
        debugger
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

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










//old notes

// const render = (noteArray) => {
//     const allNotesConvertedToStrings = noteArray.map( noteObj => NoteHTMLConverter(noteObj)).join("");
//     contentTarget.innerHTML = allNotesConvertedToStrings;
// }

// //Renders all notes
// export const NoteList = () => {
//     getNotes()
//         .then(() => {
//             const allNotes = useNotes()
//             render(allNotes)
//         })
// }

