'use client';
import { styled } from 'styled-components';
import { MovieList } from './movieList';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1140px;
  flex-direction: column;
  margin-top: 75px;
  color: #fff;
`;

export function MainMovie() {
  return (
    <Container>
      <MovieList />
    </Container>
  );
}
