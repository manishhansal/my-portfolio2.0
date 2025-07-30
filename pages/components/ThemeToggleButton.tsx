'use client';

import { useTheme } from '@/context/ThemeContext';
import { BTN_PRIMARY_STYLE, BTN_PRIMARY_TAILWIND } from '@/utils/constants';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={BTN_PRIMARY_TAILWIND}
      style={BTN_PRIMARY_STYLE}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" style={{ color: `var(--base-icon-black-themed-color)` }} />
      ) : (
        <Moon className="w-5 h-5" style={{ color: `var(--base-icon-black-themed-color)` }} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
