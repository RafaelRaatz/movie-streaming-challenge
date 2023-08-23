'use client';
import { styled } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { CardMovie } from '../cardMovie';
import { RecommendedCard } from '../recommendedCard';

export const Container = styled.div`

  .card-title {
    color: #00a9e5;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 36px 0px;
    gap: 5px;
  }

  .list-card {
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
  }

  button {
    background: none;
    border: none;
    color: #00a9e5;
    font-size: 20px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #00a9e5;
  }
`;

export function MovieList() {
  const [movies, setMovies] = useState<any[]>([]);
  const [visibleSwitcher, setVisibleSwitcher] = useState(2);
  const [visible, setVisible] = useState(9);

  const getMovies = async () => {
    try {
      const response = await api;
      const data = response.data;


      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(); 
  }, []);

  return (
    <Container>
      {movies.slice(1, visibleSwitcher).map((movie, key) => (
        <CardMovie
          key={key}
          name={movie.title}
          image={movie.poster_path}
          average={movie.vote_average}
          popularity={movie.popularity}
          date={movie.release_date}
          resume={movie.overview}
        />
      ))}
            <div className="card-title">
        <h3>Recommended</h3>

        <IoIosArrowForward />
      </div>

      <div className="list-card">
        {movies.slice(1, visible).map((movie, key) => (
          <RecommendedCard key={key} name={movie.title} image={movie.poster_path} />
        ))}
      </div>
    </Container>
  );
}