const contentContainer = document.querySelector(".alibiList")
const eventHub = document.querySelector(".container")

export const alibiHTML  = (alibiObj) => {
    return `
    <div id="alibi__modal" class="zmodal">
    <div class="zmodal-content">
    <section class="associates">
    <div class="associate__name">Name: ${ alibiObj.name }</div>
    <div class="associate__alibi">Alibi: ${ alibiObj.alibi }</div>
    
    </section>
    </div>
    </div>
    
    `
}

{/* <button id="close-btn">Close</button> */}

eventHub.addEventListener("click", event => {
    if (event.target.id === "close-btn") {
            closeModal()
        }
    })
    const closeModal = () => {
    contentContainer.innerHTML = ""
}

