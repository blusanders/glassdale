/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

export const ConvictionSelect = () => {
    // Fetch all convictions from API
    getConvictions()
    .then( () => {
        // Use slice of convictions array
        const convictions = useConvictions()
        render(convictions)
    })
}


//render filtered list of 
const render = convictionsCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convObj => {
                    const fullName = convObj.name
                    return `<option value="${convObj.id}">${fullName}</option>`
                }).join("")
            }
        </select>
    `
}

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    //dispatch event 
    if (event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("filterCriminals", {
            detail: {
                filterType: "criminals",
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

