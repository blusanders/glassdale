const contentTarget = document.querySelector(".showFacilitiesButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilitiesButton") {
        // debugger
        CriminalList();
        const customEvent = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowFacilitiesButton = () => {
    contentTarget.innerHTML = "<button id='showFacilitiesButton'>Show Facilities</button>"
}

