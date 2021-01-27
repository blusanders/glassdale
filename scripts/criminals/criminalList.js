import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'

const contentElement = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals=useCriminals();
        const matchingCriminals = appStateCriminals.filter(currentPatron => {
            return currentPatron.conviction===event.detail.crimeThatWasChosen;
        })

        render(matchingCriminals);
    }
})

eventHub.addEventListener("officerChosen", event => {
    // debugger
    // Use the property you added to the event detail.
    if (event.detail.officerThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to theh arresting officer
        */
        const appStateCriminals=useCriminals();
        const matchingCriminals = appStateCriminals.filter(currentPatron => {
            return currentPatron.arrestingOfficer===event.detail.officerThatWasChosen;
        })

        render(matchingCriminals);
    }
})

const render = criminalArray => {

    let htmlRep = ""
    //htmlRep += "<div>Criminals</div>"
    htmlRep += "<div class=criminalContainer>"

    criminalArray.forEach(criminal => {
        htmlRep += Criminal(criminal);
    });

    htmlRep+="</div>"
    //console.log(htmlRep);
    contentElement.innerHTML = htmlRep;
}

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            // debugger
            render(appStateCriminals)
        })
}