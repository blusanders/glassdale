import { FacilitiesList } from './../facility/FacilityList.js'

const contentTarget = document.querySelector(".showFacilitiesButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilitiesButton") {
        // debugger
        FacilitiesList()
        let resetVar = document.getElementById("officerSelect");
        let resetVar2 = document.getElementById("crimeSelect");
        resetVar.value = 0;
        resetVar2.value = 0;
        const customEvent = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowFacilitiesButton = () => {
    contentTarget.innerHTML = "<button id='showFacilitiesButton'>Show Facilities</button>"
}

