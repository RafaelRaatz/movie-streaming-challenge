'use client';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ImPlay2 } from 'react-icons/im';
import { BsFillPeopleFill, BsFillCalendarDateFill } from 'react-icons/bs';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: 30px;

  img {
    height: 500px;
    width: 350px;
    border-radius: 10px;
  }

  .switcher-content {
    width: 646px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.colors.text};

    h1 {
      font-size: 54px;
      margin-bottom: 25px;
    }

    .information-content {
      display: flex;
      gap: 10px;
      margin-bottom: 30px;
    }

    p {
      font-size: 18px;
    }

    .button-content {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-top: 84px;

      button {
        border: none;
        background: none;

        .watch-icon {
          width: 50px;
          height: 50px;
          color: ${(props) => props.theme.colors.text}
        }
      }
    }
  }
`;

interface IMovies {
  name: string;
  image: string;
  average: string;
  popularity: string;
  date: string;
  resume: string;
}

export function CardMovie({
  name,
  image,
  average,
  popularity,
  date,
  resume,
}: IMovies) {
  const image_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <Container>
      <img src={`${image_path}${image}`} alt="image" />
      <div className="switcher-content">
        <h1>{name}</h1>
        <div className="information-content">
          <span>Average: {average}</span>
          <AiFillStar /> |<span>Release Date: {date} </span>
          <BsFillCalendarDateFill /> |<span>Public: {popularity} </span>
          <BsFillPeopleFill />
        </div>

        <p>{resume}</p>

        <div className="button-content">
          <button type="button">
            <ImPlay2 className="watch-icon" />
          </button>
          <h3>watch now</h3>
        </div>
      </div>
    </Container>
  );
}