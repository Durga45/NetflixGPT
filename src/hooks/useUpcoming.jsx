import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcoming=()=>{
    const dispatch=useDispatch()

    const UpcomingMovie=useSelector(store=> store.movies.UpcomingMovie)

  const getUpcomingMovie = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_options
      );
      const json = await data.json();
      

      // Dispatch the action with the retrieved data as payload
      dispatch(addUpcomingMovie(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
 useEffect(()=>{
 if(!UpcomingMovie) getUpcomingMovie();
 },[])

   
}

export default useUpcoming;