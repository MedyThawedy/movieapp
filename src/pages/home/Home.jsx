import datafile from "./../../components/data/data.js";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Navigation from "../../components/navigation/Navigation.jsx";
import './home.css';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3f5bf13c3624e5013d3c11da8421e497';
    // Get the popular movies
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log('2. From fetchMovies() ', movies);
        setMovies(movies);
    };

    return (
        <>
            <h2 className="clsPopularMovies">Popular Movies</h2>
            <section className="clsHome">

                {movies.results?.map(
                    (item) =>

                    (
                        <Link className="clsMovie" key={item.id} to={`/detailspage/${item.id}`}>
                            <article >
                                <p>{item.vote_average}</p>
                                <img className="clsFilmImg" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt={item.original_title} />
                                <p className="clsFontRoboto">{item.release_date}{item.genre_ids}</p>
                                <p className="clsFontAnton">{item.original_title}</p>
                            </article>
                        </Link>
                    )


                )}
            </section>
        </>
    );
}

export default Home;