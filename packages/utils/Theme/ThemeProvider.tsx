import { Theme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { Theme as DefaultTheme } from "./Theme";

export type ThemeProviderProps = {
  theme?: Theme;
  children?: ReactNode;
};

export function ThemeProvider({
  theme = DefaultTheme,
  children,
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      { children }
    </MuiThemeProvider>
  );
}
