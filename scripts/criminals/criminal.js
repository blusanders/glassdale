//return each criminal w HTML

export const Criminal = (criminalObject, facilities) => {

//     return`
//     <div class=criminalCard>
//     <p class="criminalName">${criminalObj.name}</p>
//     <p class="criminalData criminalData__age">Age: ${criminalObj.age}</p>
//     <p class="criminalData criminalData__conviction">Crime: ${criminalObj.conviction}</p>
//     <p class="criminalData criminalData__arrestingOfficer">Officer: ${criminalObj.arrestingOfficer}</p>
//     <p class="criminalData criminalData__termStart">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
//     <p class="criminalData criminalData__termEnd">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
//     <button id="associates--${criminalObj.id}">Associate Alibis</button>
//     </div>
//     `
// }

return `
    <div class="criminalCard">
        <h3>${criminalObject.name}</h4>
            <p class="criminalData criminalData__conviction">Convicted for ${criminalObject.conviction}</p>
            <p class="criminalData criminalData__arrestingOfficer">Arrested by ${criminalObject.arrestingOfficer}</p>
            <p class="criminalData">Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p class="criminalData criminalData__age">Age: ${criminalObject.age}</p>
            <div class="criminalData">
                <h4>Facilities</h4>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
    </div>
    `
}

