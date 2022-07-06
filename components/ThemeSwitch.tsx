import React, { useContext } from 'react';
import Image from 'next/image';

import { ThemeContext } from '../store/ThemeContext';
import { Theme } from '../data';

const ThemeSwitch: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <button onClick={themeCtx.toggleTheme}>
      {themeCtx.theme === Theme.DARK && (
        <Image
          src="/images/icon-sun.svg"
          width={26}
          height={26}
          alt="Sun icon"
        />
      )}

      {themeCtx.theme === Theme.LIGHT && (
        <Image
          src="/images/icon-moon.svg"
          width={26}
          height={26}
          alt="Moon icon"
        />
      )}
    </button>
  );
};

export default ThemeSwitch;
