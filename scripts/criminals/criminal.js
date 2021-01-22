//return each criminal w HTML

export const Criminal = (criminalList) => {

    return `
    <div>
    <p>ID: ${criminalList.id} Name: ${criminalList.name}</p>
    </div>
    `
}

