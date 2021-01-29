let alibis = []

export const useAlibis = () => alibis.slice()

export const getAlibis = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */

    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
        parsedAlibis => {
            const matchingAlibis = appStateCriminals.filter(currentCriminal => {
                return currentCriminal.arrestingOfficer===filterChosenEvent.detail.alibiClick;
            //console.table(parsedAlibis);
            alibis = parsedAlibis;
        })
    })
}

