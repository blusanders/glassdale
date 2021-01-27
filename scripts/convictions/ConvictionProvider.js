let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    /*
    Fetch data
    Parse data
    Assign parsed data to convictions array
    */

    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(convictionsArray => convictions = convictionsArray)  

}

