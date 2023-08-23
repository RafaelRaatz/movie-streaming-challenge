'use client';
import { styled } from 'styled-components';
import { ListCard } from './list-card';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1140px;
  flex-direction: column;
  margin-top: 75px;
  color: #fff;
`;

export function Main() {
  return (
    <Container>
      <ListCard />
    </Container>
  );
}
