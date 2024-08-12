import { createTheme, ThemeOptions } from "@mui/material";
import { defaultButtonProps, defaultButtonVariants } from "../Button/Button.constants";
import { defaultTypographyOptions, defaultTypographyProps } from "../Typography/Typography.constants";

export const Theme = createTheme({
  spacing: 2,
  typography: defaultTypographyOptions,
  components: {
    MuiButton: {
      defaultProps: defaultButtonProps,
      variants: defaultButtonVariants,
    },
    MuiTypography: {
      defaultProps: defaultTypographyProps,
    },
  },
  palette: {
    primary: {
      main: '#FF4100',
      light: '#FF5400',
      dark: '#FF5400',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1A1A1A',
      light: '#222222',
      dark: '#121212',
      contrastText: '#FFFFFF',
    },
  },
} as ThemeOptions);
