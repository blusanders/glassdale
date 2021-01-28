//return each criminal w HTML

export const Criminal = (criminalObj) => {

    return`
    <div class=criminalCard>
    <p class="criminalName">${criminalObj.name}</p>
    <p class="criminalData criminalData__age">Age: ${criminalObj.age}</p>
    <p class="criminalData criminalData__conviction">Crime: ${criminalObj.conviction}</p>
    <p class="criminalData criminalData__arrestingOfficer">Officer: ${criminalObj.arrestingOfficer}</p>
    <p class="criminalData criminalData__termStart">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="criminalData criminalData__termEnd">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}

