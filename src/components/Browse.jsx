
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import usePopularMovies from "../hooks/usePopularMovie";
import useTrendingMovie from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";



const Browse = () => {

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

 useNowPlayingMovies()
 usePopularMovies()
 useTrendingMovie()
 useUpcoming()
 
 
  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch/>
        ):
          <>
          <MainContainer/>
            <SecondaryContainer/>
          </>
      }
      
     
    </div>
  );
};

export default Browse;
