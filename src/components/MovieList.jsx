import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './MovieCard';


const MovieList = ({ title, movies }) => {
  
const settings = {
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots:false,
};
  


  return (
    <div className="px-6 ">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <Slider {...settings}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
  </div>
  );
};
export default MovieList;