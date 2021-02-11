let witnesses = []

export const useWitnesses = () => Witnesses.slice()

export const getWitnesses = () => {
    /*
        Load database state into application state with a fetch().
    */
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            //console.table(parsedCriminals);
            witnesses = parsedWitnesses;
        }  
    )

}