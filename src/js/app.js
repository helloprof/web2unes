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

const tableHeaders = ["Song", "Year", "Length"]
tableHeaders.forEach((header) => {
    const thead = document.getElementById("header")
    const th = document.createElement("th")
    th.textContent = header
    // console.log(header)
    thead.appendChild(th)
})

function listSongs(artistID) {
    const grid = document.getElementById("grid")
    
    // filter songs by artist
    let songsByArtist = songs.filter((song) => song.artistID == artistID)
    console.log(songsByArtist)

    songsByArtist.forEach((song) => {
        const tr = document.createElement("tr")
        const tbody = document.getElementById("songs")
        tbody.appendChild(tr)

        const tdSong = document.createElement("td")
        const tdYear = document.createElement("td")
        const tdLength = document.createElement("td")

        tdSong.textContent = song.title
        tdYear.textContent = song.year
        tdLength.textContent = song.duration

        tr.appendChild(tdSong)
        tr.appendChild(tdYear)
        tr.appendChild(tdLength)

        tr.addEventListener("click", () => {
            console.log(song.title)
        })



        // tr.textContent = artistID
        // grid.appendChild(table)
        // table.appendChild(tr)
    })
}

function listArtists(artists) {
    console.log("listing artists")
    // buttons 
    const menu = document.getElementById("menu")
    const buttonMenu = document.createElement("div")
    buttonMenu.className = "buttonMenu"
    menu.appendChild(buttonMenu)

    // table 
    const grid = document.createElement("div")
    grid.className = "grid"
    grid.id = "grid"
    menu.appendChild(grid)

    artists.forEach((artist) => {
        const artistButton = document.createElement("button")
        artistButton.className = "button"
        artistButton.textContent = artist.name
        buttonMenu.appendChild(artistButton)

        artistButton.addEventListener("click", (e) => {
            const title = document.getElementById("selected-artist")
            title.textContent = artist.name
            const tbody = document.getElementById("songs")
            tbody.remove()
            const tbodyReset = document.createElement("tbody")
            tbodyReset.id = "songs"
            const table = document.querySelector("table")
            table.appendChild(tbodyReset)
            listSongs(artist.artistID)
        })
    })
}

function onLoad() {
    console.log("loaded")
    listArtists(artists)
}

window.addEventListener("load", onLoad)
