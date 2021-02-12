let witnesses = []

//return a slice of witness array
export const useWitnesses = () => witnesses.slice()

//get witnesses from API
export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            witnesses = parsedWitnesses;
        }  
    )

}

