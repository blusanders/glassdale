import { witnessHTML } from './witness.js';
import { getWitnesses, useWitnesses } from './witnessDataProvider.js';

const contentTarget = document.querySelector(".witnessesContainer");
const contentTargetCriminals = document.querySelector(".criminalContainer");
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("showWitnessesClicked", event => {
    witnessList();
})

export const witnessList = () => {
    getWitnesses()
        .then(() => {
            const witnessesArray = useWitnesses()
// debugger
            contentTargetCriminals.innerHTML=""
            render(witnessesArray)
        })
}

    const render = (witnessesArray) => {
        let renderHTML = "<div><h2>Witnesses</h2>"
        renderHTML += witnessesArray.map(witness => {
            return witnessHTML(witness)
        }).join("")
        renderHTML += "</div>"
        contentTarget.innerHTML = renderHTML
    }

