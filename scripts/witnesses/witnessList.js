import { useCriminals } from './../criminals/CriminalDataProvider.js'
import { alibiHTML } from './Alibi.js'

const contentElement = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("showWitnessesClicked", event => {

    //set ID to ID from click event
    const criminalID=parseInt(event.detail.criminalID);
 
    //get list of criminals
    const alibiArray = useCriminals();
 
    //return array per ID
    const foundAssocArray = (alibiArray.find(x => (x.id === criminalID))).known_associates;
 
    //create list of known assoc with HTML
    let renderAlibiHTML=""
    foundAssocArray.forEach(element => {
        renderAlibiHTML += alibiHTML(element);
    });
 
    //render assoc to DOM
    contentElement.innerHTML = renderAlibiHTML;
})

