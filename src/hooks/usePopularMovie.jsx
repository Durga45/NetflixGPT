import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{
    const dispatch=useDispatch()

    const PopularMovies=useSelector(store=> store.movies.PopularMovies)

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_options
      );
      const json = await data.json();
      

      // Dispatch the action with the retrieved data as payload
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
 useEffect(()=>{
 if(!PopularMovies) getPopularMovies();
 },[])

   
}

export default usePopularMovies;