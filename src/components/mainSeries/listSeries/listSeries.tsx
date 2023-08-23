'use client';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { apiSeries } from '@/services/api';
import { MdMovie } from 'react-icons/md';
import { SerieCard } from '../serieCard';

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
`;

export function ListSeries() {
  const [series, setSeries] = useState<any[]>([]);

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
    getSeries();
  }, []);

  return (
    <Container>
      <div className="card-title">
        <h2>Top Series </h2>
        <MdMovie size={22} />
      </div>
      <div className="list-card">
        {series.map((serie, key) => (
          <SerieCard key={key} name={serie.name} image={serie.poster_path} />
        ))}
      </div>
    </Container>
  );
}
