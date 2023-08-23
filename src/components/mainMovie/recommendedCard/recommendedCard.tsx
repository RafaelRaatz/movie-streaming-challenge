'use client';
import { styled } from 'styled-components';

export const Container = styled.div`
  height: 200px;
  width: 120px;
  left: 0px;
  top: 3.5px;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  h3 {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 120px;
    border-radius: 10px;
    font-size: 12px;
    padding: 12px;
  }
`;

interface IMovies {
  name: string;
  image: string;
}

export function RecommendedCard({ name, image }: IMovies) {
  const image_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <Container>
      <h3>{name}</h3>

      <img src={`${image_path}${image}`} alt="image" />
    </Container>
  );
}