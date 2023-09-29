import { useRef } from "react";
import openai from "../utils/openAi";
import { API_options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText=useRef(null);
  const dispatch=useDispatch();

  const searchMovieTmdb=async(movie)=>{
   const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_options)
   const json=await data.json()

   return json.results;
  }

const handleGptSearchClick=async()=>{
  

  const gptQuery="Act as a Movie reccomendation system ana suggest some movie for the query :"+searchText.current.value+".only give names of 5 movies, comma seperated like the example result given ahead billa,jawan,bharath,race2,race3";

  const gptResult= await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  

  const gptmovies=gptResult.choices?.[0]?.message?.content.split(",");
  
  const promiseArray= gptmovies.map(movie => searchMovieTmdb(movie))

   const tmdbResults=await Promise.all(promiseArray);
   

   dispatch(addGptMovieResult({movieNames:gptmovies,movieResults:tmdbResults}))
}




  return (
    <div>
    <div className="pt-[4%] flex justify-center">
      <form className="grid grid-cols-12 w-1/2 bg-black" onSubmit={(e)=> e.preventDefault()}>
      <input ref={searchText} type="text" placeholder="what would you like to watch today" className="p-4 m-4 border col-span-9 border-black" />
      <button className="py-2 px-4 m-4 border border-black bg-red-700 text-white font-bold rounded-md col-span-3" onClick={handleGptSearchClick}>Search</button>
      </form>
    </div>
    </div>
  )
}

export default GptSearchBar