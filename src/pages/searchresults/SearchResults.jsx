import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchResults = () => {

    // Search by filmname
    let { moviename } = useParams();
    const [movies, setMovies] = useState([]);

    console.log('1. Movie name to search', moviename);
    //
    const urlToSearch = `https://api.themoviedb.org/3/search/movie?api_key=3f5bf13c3624e5013d3c11da8421e497&query=${moviename}`;

    console.log('2. Die URL = ', urlToSearch)

    useEffect(() => {
        fetchSearchMovie();
    }, [moviename]);

    const fetchSearchMovie = async () => {
        const data = await fetch(urlToSearch);
        const movies = await data.json();
        console.log('3. From fetchSearchMovie() from SearchResults Component', movies);
        setMovies(movies);
    };

    return (
        <>
         <h2 className="clsPopularMovies">Search Results</h2>
        <section className="clsHome">
            {movies.results?.map(
                (item) =>
                (
                    <Link className="clsMovie" key={item.id} to={`/detailspage/${item.id}`}>
                        <article className="clsArticle">
                            <p className="clsVoteAverage">{item.vote_average}</p>
                            <img className="clsFilmImg" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt={item.original_title} />
                            <p className="clsFontRoboto">{item.release_date}</p>
                            <p className="clsFontAnton">{item.genre_ids}</p>
                            <p className="clsFontAnton">{item.original_title}</p>
                        </article>
                    </Link>
                )
            )}
        </section>
        </>
    )
}

export default SearchResults;