import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'

export const CriminalList = () => {

    const contentElement = document.querySelector(".criminalsContainer");

    getCriminals()
        .then(()=>{
            const criminalArray = useCriminals()

            let htmlRep = ""
            //htmlRep += "<div>Criminals</div>"
            htmlRep += "<div class=criminalContainer>"

            criminalArray.forEach(criminal => {
                htmlRep += Criminal(criminal);
            });

            htmlRep+="</div>"
            //console.log(htmlRep);
            contentElement.innerHTML = htmlRep;
        })
}

