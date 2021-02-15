import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { getFacilities, useFacilities } from './../facility/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './../facility/CriminalFacilityProvider.js'
import { getAlibis, useAlibis } from './../alibis/AlibiDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from './../convictions/ConvictionProvider.js'


const contentTargetFacilities = document.querySelector(".facilitiesContainer");
const contentTarget = document.querySelector(".criminalContainer");
const contentTargetWitnesses = document.querySelector(".witnessesContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("filterCriminals", filterChosenEvent => {

    //render criminals base on filter type
    switch (filterChosenEvent.detail.filterType) {

        case "criminals":

            //render only if a value is selected
            if (filterChosenEvent.detail.crimeThatWasChosen !== "0"){
                    
                    // find crime ID from item that was picked in dropdown from convictions data
                    const convictionsArray = useConvictions();
                    let chosenConvitionObj = convictionsArray.find(crimeObj=>{
                        return crimeObj.id === parseInt(filterChosenEvent.detail.crimeThatWasChosen);
                    })

                    //filter criminal list base on ID found above
                    const appStateCriminals=useCriminals();
                    const matchingCriminals = appStateCriminals.filter(currentPatron => {
                        return currentPatron.conviction===chosenConvitionObj.name;
                    })

                    // render(matchingCriminals);
                    const facilities = useFacilities()
                    const crimFac = useCriminalFacilities()
                    render(matchingCriminals, facilities, crimFac)

                    let resetVar = document.getElementById("officerSelect");
                    resetVar.value = 0;
                    contentTargetFacilities.innerHTML="";
                    
                }else{
                CriminalList();
            }
            break;

        case "officers":

        //render only if a value is selected
            if (filterChosenEvent.detail.officerThatWasChosen !== "0"){

                // Filter criminal list by arresting officer
                const appStateCriminals=useCriminals();
                const matchingCriminals = appStateCriminals.filter(currentPatron => {
                    return currentPatron.arrestingOfficer===filterChosenEvent.detail.officerThatWasChosen;
                })
        
                // render(matchingCriminals);
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                render(matchingCriminals, facilities, crimFac)
                // render(matchingCriminals);

                let resetVar = document.getElementById("crimeSelect");
                resetVar.value = 0;
                contentTargetFacilities.innerHTML="";

            }else{
                CriminalList();
            }
            break;

    }
})

const render = (criminalsToRender, allFacilities, allRelationships) => {

    let renderHTML = `
    <div class="criminalHeader">
    <div><h2>Criminals</h2></div>
    </div>
    <div class="criminalContent">`

    renderHTML += criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

        // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")

    renderHTML += "</div>"
    //clear witnesses
    contentTargetWitnesses.innerHTML=""
    //render criminals
    contentTarget.innerHTML = renderHTML

}

// Render ALL criminals with facilities
export const CriminalList = () => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()
// debugger
            // Pass all three collections of data to render()
            render(criminals, facilities, crimFac)
        }
    )
}

//listen for show criminals or associates buttons
eventHub.addEventListener("click", event => {

    //if criminals then show all criminals
    if (event.target.id === "showCriminalsButton"){
        // debugger
        CriminalList();
        return
    }

    //if an associates button then show associates
    if (event.target.id.startsWith("associates")) {

    let clickEvent = event.target.id.split("--")[0];
    let criminalID = event.target.id.split("--")[1];

    const customEvent = new CustomEvent("alibiClick", {
            detail: {
                criminalID: criminalID
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

