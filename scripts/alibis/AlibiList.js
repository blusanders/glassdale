import { getCriminals, useCriminals } from './../criminals/CriminalDataProvider.js'
import { alibiHTML } from './../alibis/Alibis.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("alibiClick", event => {
    const criminalID=parseInt(event.detail.criminalID);
    const alibiArray = useCriminals();
    const foundAssocArray = alibiArray.find(x => (x.id === criminalID));
    // foundAssocArray.forEach(element => {
    //     alibiHTML += alibiHTML();
    // });
    console.log(foundAssocArray);
})

// const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//             const appStateCriminals = useCriminals()
//         })
// }

