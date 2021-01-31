import { useState, useEffect } from 'react';

type ModeTypes = 'night' | 'day';

const useNightMode = (): [ModeTypes, () => void] => {
  const [theme, setTheme] = useState<ModeTypes>(getStorageTheme() || 'day');
  useEffect(() => {
    if (theme === 'night') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [theme]);

  const updateTheme = () => {
    if (theme === 'night') {
      setTheme('day');
      setStorageTheme('day');
    } else {
      setTheme('night');
      setStorageTheme('night');
    }
    return;
  };

  return [theme, updateTheme];
};

export default useNightMode;

const getStorageTheme = (): ModeTypes | null => localStorage.getItem('theme') as ModeTypes | null;
const setStorageTheme = (type: ModeTypes) => localStorage.setItem('theme', type);
