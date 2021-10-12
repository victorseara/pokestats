import {
  createTheme,
  PaletteOptions,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { PokemonType } from "api";
import React from "react";
import themes from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext({
  toggleColorMode: () => {},
  changeColors: (themeName: PokemonType) => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [colors, setColors] = React.useState<PaletteOptions>(
    themes["baseTheme"]
  );

  const { toggleColorMode, changeColors } = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      changeColors: (themeName: PokemonType) => {
        setColors(themes[themeName] as PaletteOptions);
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...colors,
        },
      }),
    [colors, mode]
  );

  React.useEffect(() => {
    if (prefersDarkMode) {
      setMode("dark");
    }
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, changeColors }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useThemeProvider() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeProvide must be used within a ThemeProvider.");
  }

  return context;
}

export default ThemeProvider;
