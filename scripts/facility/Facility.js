//return each criminal w HTML

export const Facility = (facilityObject, criminals) => {

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
        <div class="facilityCard">
            <h4>${facilityObject.facilityName}</h4>
                <p class="facilityData facilityData__arrestingOfficer">Security: ${facilityObject.securityLevel}</p>
                <p class="facilityData facilityData__age">Capacity: ${facilityObject.capacity}</p>
                <div class="facilityData">
                    <h4>Criminals</h4>
                    <ul>
                        ${criminals.map(c => `<li>${c.name}</li>`).join("")}
                    </ul>
                </div>
        </div>
        `
    }
    
    