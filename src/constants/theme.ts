// Cores da marca Vallor Contabilidade
export const colors = {
  // Azul escuro - confiança e seriedade
  primary: {
    dark: '#1e3a5f',
    main: '#2d5a8f',
    light: '#4a7bb8',
  },
  // Laranja - dinamismo e inovação
  secondary: {
    dark: '#e65a25',
    main: '#ff6b35',
    light: '#ff8c61',
  },
  // Cores neutras
  neutral: {
    white: '#ffffff',
    light: '#f5f7fa',
    gray: '#8b95a5',
    darkGray: '#4a5568',
    black: '#1a202c',
  },
  // Cores de suporte
  success: '#48bb78',
  warning: '#ed8936',
  error: '#f56565',
};

// Tipografia
export const typography = {
  fontFamily: {
    primary: '"Inter", "Segoe UI", "Roboto", sans-serif',
    heading: '"Poppins", "Inter", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// Espaçamento
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
};

// Breakpoints para responsividade
export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

// Sombras
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

// Transições
export const transitions = {
  fast: '150ms ease-in-out',
  base: '300ms ease-in-out',
  slow: '500ms ease-in-out',
};
