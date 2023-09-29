import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
    return(
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.TrendingMovie}/>
        <MovieList title={"Popular"} movies={movies.PopularMovies}/>
        <MovieList title={"Up Coming"} movies={movies.UpcomingMovie}/>
        </div>
      </div>
    )
};

export default SecondaryContainer;
