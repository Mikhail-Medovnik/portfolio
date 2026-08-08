export interface ITheme {
  fonts: {
    title: string;
    main: string;
  };
  colors: {
    primary1: string;
    background1: string;
    accent1: string;
    button: string;
    background2: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

const theme: ITheme = {
  fonts: {
    title: "var(--font-space-grotesk, sans-serif)",
    main: "var(--font-space-grotesk, sans-serif)",
  },
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export default theme;
