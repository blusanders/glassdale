export const alibiHTML  = (alibiObj) => {
    // debugger
        return `
            <section class="associates">
            <div class="note__author">Name: ${ alibiObj.name }</div>
            <div class="note__author">Alibi: ${ alibiObj.alibi }</div>
            </section>
        `
    }