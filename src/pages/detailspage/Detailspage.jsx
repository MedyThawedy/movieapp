import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Detailspage = () => {

    let { movieid } = useParams();
    console.log('1. From Detail Page The id is this : ', movieid);
    const [movieDetail, setMovieDetail] = useState({});
    const [movieTrailerKey, setMovieTrailerKey] = useState({});


    // Api url https://api.themoviedb.org/3/movie/985939?api_key=3f5bf13c3624e5013d3c11da8421e497
    // https://blog.devgenius.io/fetch-data-from-a-real-api-react-js-f962da8af24a
    const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=3f5bf13c3624e5013d3c11da8421e497`;

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        console.log('2. From fetchDetail() ', movie);
        setMovieDetail(movie);
    };
    console.log('3. movieDetail = ', movieDetail)

    // Get the video trailer
    const url1 = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=3f5bf13c3624e5013d3c11da8421e497`;
    useEffect(() => {
        fetchTrailer();
    }, []);

    const fetchTrailer = async () => {
        const data1 = await fetch(url1);
        const trailer = await data1.json();
        console.log('4. From fetchTrailer() ', trailer);
        setMovieTrailerKey(trailer);
    };
    console.log('5. movieTrailer.results = ', movieTrailerKey.results);
    let varKey = movieTrailerKey.results?.[0]?.key;

    // Get genres
    console.log('6. movieTrailer.results?.[0] = ', varKey);

    console.log('7. genres = ', movieDetail.genres?.[0].id);
    let genres = "";
    (movieDetail.genres?.map((item) => genres += item.name + ','))//?.slice(0, 4);
    genres = genres.slice(0, -1);


    return (
        <>
            <section>
                <h2>{movieDetail.original_title}</h2>
                <article className='detailArt1'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + movieDetail.poster_path} alt={movieDetail.original_title} />
                </article>
                <article className='detailArt2'>
                    <div className='detailArt2Left'>
                        <p>Release Date</p>
                        <p>Genres</p>
                        <p>Overview</p>
                    </div>
                    <div className='detailArt2Right'>
                        <p>{movieDetail.release_date}</p>
                        <p>{genres}</p>
                        <p>{movieDetail.overview}</p>
                        <p>{movieDetail.vote_average}</p>
                    </div>
                    <h3>Watch Trailer</h3>
                    <iframe src={'https://www.youtube.com/embed/' + varKey}></iframe>

                </article>
            </section></>
    );
}

export default Detailspage;
