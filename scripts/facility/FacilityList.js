import { getCriminals, useCriminals } from './../criminals/CriminalDataProvider.js'
import { getFacilities, useFacilities } from './FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'
import {Facility} from './Facility.js'

const contentTarget = document.querySelector(".facilitiesContainer");
const contentTargetWitnesses = document.querySelector(".witnessesContainer")
const contentTargetCriminals = document.querySelector(".criminalContainer")
const eventHub = document.querySelector(".container")

const render = (allCriminals, facilitiesToRender, allRelationships) => {

    let renderHTML = `
    <div class="facilityHeader">
    <div><h2>Facilities</h2></div>
    </div>
    <div class="facilityContent">`

    renderHTML += facilitiesToRender.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const criminalRelationshipsForThisFacility = allRelationships.filter(fac => fac.facilityId === facilityObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const criminals = criminalRelationshipsForThisFacility.map(fac => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === fac.criminalId)
                return matchingCriminalObject
            })

        // Must pass the matching facilities to the Criminal component
            return Facility(facilityObject, criminals)
        }
    ).join("")

    renderHTML += "</div>"
    //clear witnesses
    contentTargetWitnesses.innerHTML=""
    //clear criminals
    contentTargetCriminals.innerHTML=""
    //render faciities
    contentTarget.innerHTML = renderHTML

}

// Render ALL criminals with facilities
export const FacilitiesList = () => {
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