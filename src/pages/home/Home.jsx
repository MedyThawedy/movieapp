
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './home.css';
import {  IoCogSharp } from "react-icons/io5";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=3f5bf13c3624e5013d3c11da8421e497`;
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


    const [popupOpen, setPopupOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    title: '',
    yearFrom: '',
    yearTo: '',
    actor: '',
    director: '',
    genre: '',
    averageVote: '',
  });

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
    setSearchParams({
      title: '',
      yearFrom: '',
      yearTo: '',
      actor: '',
      director: '',
      genre: '',
      averageVote: '',
    });
  };

  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = async (event) => {
    event.preventDefault();
   // onSearch(searchParams);
    handlePopupClose();


    try {
      // Perform the search using the Movie Database API with the provided search parameters
      const apiKey = '3f5bf13c3624e5013d3c11da8421e497';
     // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchParams.title}&year=${searchParams.yearFrom}-${searchParams.yearTo}&actor=${searchParams.actor}&director=${searchParams.director}&genre=${searchParams.genre}&vote_average.gte=${searchParams.averageVote}`;
      const searchUrl = buildSearchUrl(apiKey);
      const response = await fetch(searchUrl);
      const data = await response.json();

      console.log(searchUrl);
      // Handle the response data
      console.log(data);

      setMovies(data);

      // Close the popup after performing the search
      handlePopupClose();
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };



  // https://api.themoviedb.org/3/genre/tv/list?api_key=3f5bf13c3624e5013d3c11da8421e497

  const genres = [
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 10762,
      "name": "Kids"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10763,
      "name": "News"
    },
    {
      "id": 10764,
      "name": "Reality"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10766,
      "name": "Soap"
    },
    {
      "id": 10767,
      "name": "Talk"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  const getGenreIdByName = (name) => {
    const genre = genres.find((genre) => genre.name.toLowerCase() === name.toLowerCase());
    return genre ? genre.id : null;
  };

  const buildSearchUrl = (apiKey) => {
    const { title, yearFrom, yearTo, actor, director, genre, averageVote } = searchParams;

    let searchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    if (title) {
      //https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query={title}
      searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=3f5bf13c3624e5013d3c11da8421e497&query=${encodeURIComponent(title)}`;
    }
    
    if (yearFrom) {
      /*
      searchUrl += `&primary_release_date.gte=${yearFrom}`;
      */
      searchUrl += `&primary_release_year=${yearFrom}`;
    }
    
    if (yearTo) {
      searchUrl += `-${yearTo}`;
    }
    
    if (actor) {
      searchUrl += `&with_cast=${encodeURIComponent(actor)}`;
    }
    
    if (director) {
      searchUrl += `&with_crew=${encodeURIComponent(director)}`;
    }
    
    if (genre) {
     
         searchUrl += `&with_genres=${encodeURIComponent(genre)}`;
    
    }
    
    if (averageVote) {
      searchUrl += `&vote_average.gte=${averageVote}`;
    }

    return searchUrl;
  };


    return (
        <>
        <div className="clsHomeHeader">
           <h2 className="clsPopularMovies">Popular Movies</h2> 
      <div className="clsHomeHeaderRight">
      <button onClick={handlePopupOpen}> <span className="btn-a-search-left"> <IoCogSharp /> </span> <span className="btn-a-search-right"> Advanced Search</span></button>
      {popupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Advanced Search</h2>
            <form onSubmit={handleSearch}>
              <input type="text" name="title" placeholder="Search by title" value={searchParams.title} onChange={handleChange} />
              <div>
                <label>Year From:</label>
                <input type="number" name="yearFrom" placeholder="From" value={searchParams.yearFrom} onChange={handleChange} />
              </div>
             {/*  
             <div>
                <label>Year To:</label>
                <input type="number" name="yearTo" placeholder="To" value={searchParams.yearTo} onChange={handleChange} />
              </div>
            
              <input type="text" name="actor" placeholder="Actor's name" value={searchParams.actor} onChange={handleChange} />
              <input type="text" name="director" placeholder="Director's name" value={searchParams.director} onChange={handleChange} />
              */} 
              {/*<input type="text" name="genre" placeholder="Genre" value={searchParams.genre} onChange={handleChange} />*/}
             
              <select name="genre" onChange={handleChange} className="select-genre">
  <option value="">Select Genre</option>
  <option value="10759">Action &amp; Adventure</option>
  <option value="16">Animation</option>
  <option value="35">Comedy</option>
  <option value="80">Crime</option>
  <option value="99">Documentary</option>
  <option value="18">Drama</option>
  <option value="10751">Family</option>
  <option value="10762">Kids</option>
  <option value="9648">Mystery</option>
  <option value="10763">News</option>
  <option value="10764">Reality</option>
  <option value="10765">Sci-Fi &amp; Fantasy</option>
  <option value="10766">Soap</option>
  <option value="10767">Talk</option>
  <option value="10768">War &amp; Politics</option>
  <option value="37">Western</option>
</select>
             
              <div>
                <label>Average Vote:</label>
                <input type="number" name="averageVote" placeholder="Vote average" value={searchParams.averageVote} onChange={handleChange} />
              </div>
              <div className="popup-bottom-button">
              <button type="submit">Search</button> <button onClick={handlePopupClose}>Close</button>
              </div>
            </form>
            
          </div>
        </div>
      )}
    </div>

        </div>
            <section className="clsHome">
                {movies.results?.map(
                    (item) => 
                    (
                        <Link className="clsMovie" key={item.id} to={`/detailspage/${item.id}`}>
                            <article className="clsArticle">
                                <p className="clsVoteAverage">{(item.vote_average).toFixed(1)}</p>
                                <img className="clsFilmImg" src={(item.poster_path !== null) ? ('https://image.tmdb.org/t/p/w500/'+item.poster_path) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VdKRIadT_vpyzpsdJ4yeg30T1c6nGkJJtQ&usqp=CAU"} alt={item.original_title} />
                                <p className="clsFontRoboto">{(item.release_date).slice(0,4)}{/*item.genre_ids*/}</p>
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
