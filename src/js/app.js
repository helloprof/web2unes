/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

// const tableHeaders = ["Song", "Year", "Length"]
// tableHeaders.forEach((header) => {
//     const thead = document.getElementById("header")
//     const th = document.createElement("th")
//     th.textContent = header
//     // console.log(header)
//     thead.appendChild(th)
// })

function listSongs(artistID) {
    const grid = document.getElementById("grid")
    
    // filter songs by artist
    let songsByArtist = songs.filter((song) => song.artistID == artistID)
    console.log(songsByArtist)

    songsByArtist.forEach((song) => {
        // const tr = document.createElement("tr")
        // const tbody = document.getElementById("songs")
        // tbody.appendChild(tr)

        // const tdSong = document.createElement("td")
        // const tdYear = document.createElement("td")
        // const tdLength = document.createElement("td")

        // tdSong.textContent = song.title
        // tdYear.textContent = song.year
        // tdLength.textContent = song.duration

        // tr.appendChild(tdSong)
        // tr.appendChild(tdYear)
        // tr.appendChild(tdLength)

        // tr.addEventListener("click", () => {
        //     console.log(song.title)
        // })

        const songCard = document.createElement("div")
        songCard.className = "card"

        const image = document.createElement("img")
        const cardHeader = document.createElement("div")
        const title = document.createElement("h5")
        const description = document.createElement("h6")


        image.src = song.albumCover
        title.textContent = song.title
        description.textContent = song.albumName


        cardHeader.appendChild(title)
        cardHeader.appendChild(description)

        songCard.appendChild(image)
        songCard.appendChild(cardHeader)


        const cardContainer = document.querySelector(".cardContainer")        
        cardContainer.appendChild(songCard)

    //     <div class="card">
    //     <img src="images/album1.jpeg" alt="Avatar" class="cardImage">
    //     <div class="container">
    //         <h4><b>John Doe</b></h4>
    //         <p>Architect & Engineer</p>
    //     </div>
    // </div>



        
    })
}

function listArtists(artists) {
    console.log("listing artists")
    // buttons 
    const menu = document.getElementById("artists")
    const buttonMenu = document.createElement("div")
    buttonMenu.className = "buttonMenu"
    menu.appendChild(buttonMenu)

    // table 
    const grid = document.createElement("div")
    grid.className = "grid"
    grid.id = "grid"
    menu.appendChild(grid)

    const table = document.querySelector("table")
    table.remove()

    artists.forEach((artist) => {
        const artistButton = document.createElement("button")
        const artistImage = document.createElement("img")

        artistButton.className = "artist-button"
        // artistButton.textContent = artist.name
        artistImage.className = "artist-image"
        artistImage.src = artist.image

        artistButton.appendChild(artistImage)
        buttonMenu.appendChild(artistButton)

        artistButton.addEventListener("click", (e) => {
            const title = document.getElementById("selected-artist")
            title.textContent = artist.name

            // const tbody = document.getElementById("songs")
            // tbody.remove()
            // const tbodyReset = document.createElement("tbody")
            // tbodyReset.id = "songs"
            // const table = document.querySelector("table")
            // table.appendChild(tbodyReset)

            // const mainContent = document.querySelector(".mainContent")
            // mainContent.remove()

            // const tbodyReset = document.createElement("div")
            // tbodyReset.className = "mainContent"
            // const menu = document.querySelector("menu")
            // menu.appendChild(tbodyReset)

            const mainContent = document.querySelector(".mainContent")
            // const cardTemp = document.querySelector(".cardContainer")
            // cardTemp.remove()

            const existingCardContainer = document.querySelector(".cardContainer")
            
            if (existingCardContainer) {
                existingCardContainer.remove()
            }

            const cardContainer = document.createElement("div")
            cardContainer.className = "cardContainer"
            mainContent.appendChild(cardContainer)
            listSongs(artist.artistID)
        })
    })
}

function onLoad() {
    console.log("loaded")
    listArtists(artists)
}

window.addEventListener("load", onLoad)
