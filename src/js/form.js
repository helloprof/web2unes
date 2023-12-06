function addSongInput() {
    const newSongButton = document.querySelector("#request-song")
    newSongButton.addEventListener("click", (e) => {
        const fieldset = document.querySelector("#songs-list")
        const input = document.createElement("input")
        input.type = "text"
        input.placeholder = "Heartless"
    
        fieldset.appendChild(input)
    })
}

function onLoad() {
    console.log("loaded")
    addSongInput()
}

window.addEventListener("load", onLoad)