'use client';

import { useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/style/theme/darkMode';
import mediatheme from '@/style/theme/media';

import { themeState } from './globalAtom';
import StyledComponentsRegistry from './registry';


export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const themeObj = currentTheme === 'light' ? lightTheme : darkTheme;
  const theme = { ...themeObj, ...mediatheme };
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
