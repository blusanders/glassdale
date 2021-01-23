import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./OfficerDataProvider.js";

export const OfficerList = () => {

    const contentElement = document.querySelector(".officersContainer");

getOfficers()
    .then(()=>{
        const officeArray = useOfficers()

        let htmlRep = "<div>Officers</div>"
        htmlRep += "<div>"

        officeArray.forEach(officer => {
            htmlRep += Officer(officer);
        });

        htmlRep+="</div>"
        console.log(htmlRep);
        contentElement.innerHTML = htmlRep;
    })

}

