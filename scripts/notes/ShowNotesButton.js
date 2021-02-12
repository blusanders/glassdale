import { NoteList } from "./../notes/NoteList.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteListButton")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        NoteList();
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNotesButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}

