import {witnessList} from "./../witnesses/witnessList.js"
import { CriminalList } from "./CriminalList.js";


const contentTarget = document.querySelector(".showCriminalsButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showCriminalsButton") {
        // debugger
        CriminalList();
        const customEvent = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowCriminalsButton = () => {
    contentTarget.innerHTML = "<button id='showCriminalsButton'>Show Criminals</button>"
}

