'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html, body{
    height: 100%;
    width:100%;
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.colors.background};
   

}

#root{
    height: 100%;
    width:100%;
}

`;
