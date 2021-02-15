let criminals = []

export const useCriminals = () => {
// debugger
    return criminals.sort((a,b) => {
            const aLast = a.name.split(" ")[1]
            const bLast = b.name.split(" ")[1]

            if (aLast < bLast) {return -1}
            if (aLast > bLast) {return 1}
        }).slice()

        // return criminals.slice()
}

//get all criminals from api
export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
        parsedCriminals => {
            // console.table(parsedCriminals);
            criminals = parsedCriminals;
        }  
    )

}

