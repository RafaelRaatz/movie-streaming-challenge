'use client';
import React, { useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';
import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import { useMovieStore } from '@/store/movies';
import { Footer, Header } from '@/components';

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  const themes = useMovieStore((state) => state.theme);

  const colorTheme = themes === 'light' ? light : dark;

  return (
    <StyleRegistry registry={jsxStyleRegistry}>
      <ThemeProvider theme={colorTheme}>
        
        <Header />
        {children}
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
      
    </StyleRegistry>
  );
}
