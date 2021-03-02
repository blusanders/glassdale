/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

//get officer array slice
export const OfficerSelect = () => {
    getOfficers()
    .then( () => {
        const officers = useOfficers()
        // debugger
        render(officers)
    })
}


//render filtered list of 
const render = officerCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(offObj => {
                    const name = offObj.name
                    return `<option value="${name}">${name}</option>`
                }).join("")
            }
        </select>
    `
}

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    if (event.target.id === "officerSelect") {
        // debugger
        const customEvent = new CustomEvent("filterCriminals", {
            detail: {
                filterType: "officers",
                officerThatWasChosen: event.target.value
            }
        })
        // console.log(customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})



