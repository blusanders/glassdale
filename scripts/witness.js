export const witnessHTML  = (witnessObj) => {
    // debugger
        return `
            <section class="eachWitness">
            <div class="note__author">Witness: ${ witnessObj.name }</div>
            <div class="note__author">Statements: ${ witnessObj.statements }</div>
            </section>
        `
    }