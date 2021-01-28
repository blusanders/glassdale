export const NoteHTMLConverter = (noteObject) => {
// debugger
    return `
        <section class="note">
        <div class="note__author">Author: ${ noteObject.author }</div>
        <div class="note__timestamp">Timestamp: ${noteObject.timestamp}</div>
        <div class="note__suspect">Title: ${ noteObject.suspect }</div>
        <div class="note__text">${ noteObject.text }</div>
        </section>
    `
}