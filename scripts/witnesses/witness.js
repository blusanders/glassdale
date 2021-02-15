export const witnessHTML  = (witnessObj) => {
    // debugger
        return `
            <div class="witnessCard">
            <div class="witness__name">Witness: ${ witnessObj.name }</div>
            <div class="witness__statements">Statements: ${ witnessObj.statements }</div>
            </div>
        `
    }