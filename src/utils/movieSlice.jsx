import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        PopularMovies:null,
        TrendingMovie:null,
        UpcomingMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrendingMovie:(state,action)=>{
            state.TrendingMovie=action.payload;
        },
        addUpcomingMovie:(state,action)=>{
            state.UpcomingMovie=action.payload;
        },
       
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }

})
export const{addNowPlayingMovies , addTrailerVideo,addPopularMovies,addTrendingMovie,addUpcomingMovie}=moviesSlice.actions;
export default moviesSlice.reducer;
