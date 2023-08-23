'use client';
import { styled } from "styled-components"
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { MovieCard } from "../movieCard";
import {BiCameraMovie} from "react-icons/bi"


export const Container = styled.div`
.card-title{
    color: #00A9E5;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 36px 0px;
    gap: 5px;
}

.list-card{
    display: flex;
    flex-flow: row wrap;
    gap: 25px;

}

`

export function ListMovies() { 
   const [movies, setMovies] = useState<any[]>([]);

    const getMovies = async () => {
        try {
          const response = await api;
          const data = response.data;
          console.log(data.results)
          
          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }
      };


      useEffect(() => {
        getMovies();
      }, []);
    
    return(
        <Container>
        <div className="card-title">
        <h2>Top Movies </h2>
      <BiCameraMovie size={22} />
        </div>
        <div className="list-card">
            {movies.map((movie, key)=>(
                <MovieCard 
                key ={key}
                name={movie.title}
                image= {movie.poster_path} />
            ) )}
        </div>
        </Container>
    )};