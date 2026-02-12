import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to get system preference
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

// Helper to get initial theme from localStorage
const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored !== null && ['light', 'dark', 'system'].includes(stored)) {
      return stored as Theme;
    }
  }
  return 'system'; // Default to system preference
};

// Helper to resolve initial theme
const getInitialResolvedTheme = (): 'light' | 'dark' => {
  const theme = getInitialTheme();
  return theme === 'system' ? getSystemTheme() : theme;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(getInitialResolvedTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    // Apply theme
    const applyTheme = () => {
      const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
      setResolvedTheme(effectiveTheme);
      
      root.classList.remove('light', 'dark');
      root.classList.add(effectiveTheme);
    };

    applyTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    // Save to localStorage
    localStorage.setItem('theme', theme);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
