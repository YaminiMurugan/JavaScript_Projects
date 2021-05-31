const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=29950a2b0d6b63e3781d27ede97a2574&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_PATH = 'https://api.themoviedb.org/3/search/movie?&api_key=29950a2b0d6b63e3781d27ede97a2574&page=1&query="'
// usind one double quote to concatenate the dynamic search term to the url 
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}


function showMovies(movies) {
    // clear the result first to load the search output 
    main.innerHTML = ''
    movies.forEach(movie => {
        // destructuring the object by pulling the properties out of the object 
        const {
            title,
            poster_path,
            vote_average,
            overview
        } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <img src= "${IMG_PATH + poster_path}" alt = "${title}">
            <div class = "movie-info" >
            <h3> ${title} </h3>
             <span class = "${getClassByRate(vote_average)}" > ${vote_average} </span> 
             </div> 
             <div class = "overview" >
            <h3> Overview </h3>
            ${overview} 
        </div>`
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_PATH + searchTerm)

        search.value = ''
    } else {
        // reload the window 
        window.location.reload()
    }
})