export const NoteHTMLConverter = (noteObject,criminalCollection) => {
// debugger
//console.log(noteObject)

    return `
        <section class="note">
        <div class="note__text">${ criminalCollection.name }</div>
        <div class="note__author">Author: ${ noteObject.author }</div>
        <div class="note__timestamp">Date: ${noteObject.timestamp}</div>
        <div class="note__text">Text: ${ noteObject.text }</div>
        <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}