let criminals = []

export const useCriminals = () => {

    criminals.sort((a,b) => {
            const aLast = a.name.split(" ")[1]
            const bLast = b.name.split(" ")[1]

            if (aLast < bLast) {return -1}
            if (aLast > bLast) {return 1}
            return 0 
        })
    return criminals.slice()
}

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */

    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
        parsedCriminals => {
            //console.table(parsedCriminals);
            criminals = parsedCriminals;
        }  
    )

}

