const contentTarget = document.querySelector(".showWitnessesButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnessesButton") {
        // debugger
        ShowWitnesses();
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessesButton = () => {
    contentTarget.innerHTML = "<button id='showWitnessesButton'>Show Witnesses</button>"
}

