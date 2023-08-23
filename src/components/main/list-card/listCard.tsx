'use client';
import { styled } from 'styled-components';
import { CardMovie } from '../card-movies';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { api, apiSeries } from '@/services/api';
import { CardSwitcher } from '../card-switcher';

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

export function ListCard() {
  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [visible, setVisible] = useState(7);
  const [visibleSwitcher, setVisibleSwitcher] = useState(1);

  const getMovies = async () => {
    try {
      const response = await api;
      const data = response.data;
      console.log(data.results);

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getSeries = async () => {
    try {
      const response = await apiSeries;
      const data = response.data;
      console.log(data);

      setSeries(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
    getSeries();
  }, []);

  return (
    <Container>
      {movies.slice(0, visibleSwitcher).map((movie, key) => (
        <CardSwitcher
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
        <h3>Top TV Series |</h3>

        <button>
          {' '}
          <a href="/series">See more</a>{' '}
        </button>

        <IoIosArrowForward />
      </div>
      <div className="list-card">
        {series.slice(1, visible).map((movie, key) => (
          <CardMovie key={key} name={movie.name} image={movie.poster_path} />
        ))}
      </div>
      <div className="card-title">
        <h3>Top Movies |</h3>
        <button>
          {' '}
          <a href="/movies">See more</a>{' '}
        </button>
        <IoIosArrowForward />
      </div>
      <div className="list-card">
        {movies.slice(1, visible).map((movie, key) => (
          <CardMovie key={key} name={movie.title} image={movie.poster_path} />
        ))}
      </div>
    </Container>
  );
}
