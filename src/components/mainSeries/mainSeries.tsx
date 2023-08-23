'use client';
import { styled } from 'styled-components';
import { ListSeries } from './listSeries';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1140px;
  flex-direction: column;
  margin-top: 25px;
  color: #fff;
`;

export function MainSeries() {
  return (
    <Container>
      <ListSeries />
    </Container>
  );
}
