const albumList = document.getElementById("album-list")
const emptyStateContainer = document.getElementById("empty-state-container")
const albumItemContainer = document.getElementById("album-item-container")
const searchForm = document.getElementById("search-form")
let resultsArray = []
let albumListArray = []

function generateAlbumHtml(album, list) {
    const largeArtWork = album.artworkUrl100.replace("100x100bb", "1200x1200bb")
    list.innerHTML += `
        <div id="album-item-container">
            <div id="album-item">
                <div id="album-artwork-container">
                    <a href="${largeArtWork}" target="_blank"><img src="${largeArtWork}" id="album-artwork"></a>
                </div>
                <div id="album-info-container">
                    <h2 id="album-title"><span id="album-title-key"></span> ${album.collectionName}</h2>
                    <p id="album-artist"><span id="album-artist-key">Artist:</span> ${album.artistName}</p>
                    <p id="album-country">Country: ${album.country}</p>
                    <p id="album-genre">Genre: ${album.primaryGenreName}</p>
                </div>
            </div>
        </div>
    `
}

function fetchSearch(title) {
    const formattedTitle = title.replace(" ", "+")
    fetch(`https://itunes.apple.com/search?term=${formattedTitle}&entity=album&limit=10`)
        .then(res => res.json())
        .then(data => {
            let searchResults = data.results

            console.log(data.results)

            if (searchResults === undefined) {
                albumList.innerHTML = `
                    <div id="no-results-msg">
                        <p id="no-results-msg-p">Unable to find what you're looking for. Please try another search.</p>
                    </div>
                `
            }
            
            for (const result of searchResults) {
                getAlbumData(result)
            }
            
            albumList.style.flexDirection = "column"
        })
}

function getAlbumData(result) {
    let { artistName, collectionName, artworkUrl100, country, primaryGenreName } = result

            artworkUrl100 === "N/A" ? artworkUrl100 = "img/poster-not-available.jpg" : artworkUrl100

            let resultObj = {
                artistName: artistName,
                collectionName: collectionName,
                artworkUrl100: artworkUrl100,
                country: country,
                primaryGenreName: primaryGenreName
            }
            
            resultsArray.push(resultObj)

            albumList.innerHTML = ""

            for (const result of resultsArray) {
                generateAlbumHtml(result, albumList)
            }
}

albumList.innerHTML = `
        <div id="empty-state-container">
            <img src="img/album-cover-design.png" alt="album cover icon" id="album-cover-icon">
            <p id="empty-state-p">Start exploring</p>
        </div>
    `

searchForm.addEventListener("submit", function(e) {
    e.preventDefault()
    resultsArray.splice(0) // reset the results array so search results start from a blank slate every time

    const albumSearch = document.getElementById("title-field").value

    fetchSearch(albumSearch)
})

