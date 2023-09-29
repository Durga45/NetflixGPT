import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

    const nowPlayingMovies=useSelector(store=> store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_options
      );
      const json = await data.json();
      

      // Dispatch the action with the retrieved data as payload
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
 useEffect(()=>{
 if(!nowPlayingMovies) getNowPlayingMovies();
 },[])

   
}

export default useNowPlayingMovies;