import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTrendingMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useTrendingMovie=()=>{
    const dispatch=useDispatch()
    const TrendingMovie=useSelector(store=> store.movies.TrendingMovie)
  const getTrendingMovie = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_options
      );
      const json = await data.json();
      

      // Dispatch the action with the retrieved data as payload
      dispatch(addTrendingMovie(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
 useEffect(()=>{
  if(!TrendingMovie) getTrendingMovie();
 },[])

   
}

export default useTrendingMovie;