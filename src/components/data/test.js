let movie;

// Api url https://api.themoviedb.org/3/movie/985939?api_key=3f5bf13c3624e5013d3c11da8421e497
let arrFnGetMovieById = (movieid) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=3f5bf13c3624e5013d3c11da8421e497`)
        .then(res => res.json())
        .then(movieItems => (movie = movieItems))
}

arrFnGetMovieById(985939);

console.log(movie);