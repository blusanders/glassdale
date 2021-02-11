export const NoteHTMLConverter = (noteObject,criminalCollection) => {

console.log("ID: " + noteObject.id + " Crim: " + criminalCollection.name)

    return `
        <section class="note">
        <div class="note__author">Author: ${ noteObject.author }</div>
        <div class="note__timestamp">Timestamp: ${noteObject.timestamp}</div>
        <div class="note__suspect">Title: ${ criminalCollection.name }</div>
        <div class="note__text">${ noteObject.noteText }</div>
        </section>
    `
}