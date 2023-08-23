'use client';
import { ThemeContext, styled } from 'styled-components';
import {
  AiOutlineHistory,
  AiOutlineNotification,
  AiOutlineSearch,
  AiOutlineSetting,
} from 'react-icons/ai';
import Avatar from '@mui/joy/Avatar';
import Switch from 'react-switch';
import { useMovieStore } from '@/store/movies';
import { ChangeEvent, useContext } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const Container = styled.header`
    height: 76px;
    background: ${(props) => props.theme.colors.secundary};
    

    .header-content{
        max-width: 1136px;
        margin: 0 auto;
        padding-top: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        

        .header-button{
            display: flex;          
            align-items: center;
    
            button{
                width: 134px;
                height: 32px;
                border: none;
                background: none;
                cursor: pointer;
                color: #fff;
            }

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        input {
            width: 310px;
            height: 41px;
            text-align: center;
            background: ${(props) => props.theme.colors.secundary};
            border: 1px solid #808080;
            border-radius: 32px;
          }
    
          .search-icon {
            border: none;
            color: #fff;
            background: ${(props) => props.theme.colors.secundary};
            position: absolute;
            margin: 16px 0 0 15px;
    
            }
          }

          .header-icons{
            display: flex;
            gap: 20px;
            

            .icons{
                cursor: pointer;
                color: #fff;
            }

            .icon{
                width: 25px;
                height: 20px;
                
            }

          }

          .theme {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${(props) => props.theme.colors.primary};
            width: 90px;
            height: 14px;
            border-radius: 20px;
      
            .light {              
              display: flex;
              justify-content: center;
              padding: 2px;
              width: 40px;
              height: 20px;
              border: 1px solid #000;  
              border-radius: 60px;
              background: ${(props) => props.theme.colors.primary};
              color: ${(props) => props.theme.colors.button};
            }
      
            .dark {
              display: flex;
              justify-content: center;
              padding: 2px;
              width: 40px;
              height: 20px;
              border: 1px solid #000;  
              border-radius: 60px;
              background: ${(props) => props.theme.colors.primary};
              color: ${(props) => props.theme.colors.button};
            }
          }
        
    }
;
`;

export function Header() {
  const updateTheme = useMovieStore((state) => state.updateTheme);

  return (
    <Container>
      <div className="header-content">
        <div className="header-button">
          <Avatar>RR</Avatar>
          <button>
            {' '}
            <a href="/">Home</a>
          </button>{' '}
          |
          <button>
            <a href="/movies">Movies</a>
          </button>
          |
          <button>
            {' '}
            <a href="/series">Series</a>
          </button>
          |<button>Channels</button>
        </div>

        <div className="header-input">
          <button type="button" className="search-icon">
            <AiOutlineSearch />
          </button>
          <input type="text" placeholder="Pesquisar aqui" />
        </div>

        <div className="header-icons">
          <div className="icons">
            <AiOutlineSetting className="icon" />
          </div>
          <div className="icons">
            <AiOutlineNotification className="icon" />
          </div>
        </div>
        <div className="theme">
          <button
            className="light"
            type="button"
            onClick={() => updateTheme('light')}
          >
            <BsFillSunFill />
          </button>
          <button
            className="dark"
            type="button"
            onClick={() => updateTheme('dark')}
          >
            <BsFillMoonStarsFill />
          </button>
        </div>
      </div>
    </Container>
  );
}
