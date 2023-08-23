'use client';
import { styled } from 'styled-components';
import { ListMovies } from './listMovies';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1140px;
  flex-direction: column;
  margin-top: 25px;
  color: #fff;
`;

export function MainMovies() {
  return (
    <Container>
      <ListMovies />
    </Container>
  );
}
