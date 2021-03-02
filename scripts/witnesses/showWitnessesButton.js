import {witnessList} from "./../witnesses/witnessList.js"


const contentTarget = document.querySelector(".showWitnessesButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnessesButton") {
        // debugger
        witnessList();
        let resetVar = document.getElementById("officerSelect");
        let resetVar2 = document.getElementById("crimeSelect");
        resetVar.value = 0;
        resetVar2.value = 0;
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessesButton = () => {
    contentTarget.innerHTML = "<button id='showWitnessesButton'>Show Witnesses</button>"
}

