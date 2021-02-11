import { NoteList } from "./../notes/NoteList.js";

const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        NoteList;
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNotesButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}

