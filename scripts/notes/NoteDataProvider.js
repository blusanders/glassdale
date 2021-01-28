const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    // debugger
    const noteStateChangedEvent = new CustomEvent("noteStateChangedEvent", {
        detail: {
            noteStateEvent: "noteSaved",
        }  
    })

    eventHub.dispatchEvent(noteStateChangedEvent)
}


let notes=[];

export const useNotes = () => {
    return notes.slice();
}


export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNote = note => {
    // debugger
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

