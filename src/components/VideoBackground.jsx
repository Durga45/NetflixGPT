import {useSelector } from "react-redux/es/hooks/useSelector";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground=({movieId})=>{
    
    const trailerVideo=useSelector((store)=> store.movies?.trailerVideo)

   useMovieTrailer(movieId);
   const videoUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&enablejsapi=1&modestbranding=1&origin=http://localhost:5173`;


    return(
        <div>
            <iframe 
             className="w-screen aspect-video"
            frameBorder="0"
            src={videoUrl} 
            title="YouTube video player" 
            allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture;" 
            allowFullScreen>
           </iframe>
        </div>
    )
}

export default VideoBackground;