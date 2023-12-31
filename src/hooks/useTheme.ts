import { useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const onChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    onChangeTheme,
  };
}
