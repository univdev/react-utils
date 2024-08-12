import { ComponentsVariants, Theme } from "@mui/material";
import { ButtonProps } from "./Button";

export const defaultButtonProps: Partial<ButtonProps> = {
  variant: 'contained',
  color: 'primary',
  disableElevation: true,
  disableRipple: true,
};

export const defaultButtonVariants: ComponentsVariants<Theme>['MuiButton'] = [
  {
    props: { variant: 'text' },
    style: {
      padding: 0,
      minWidth: 'auto',
      maxHeight: 'auto',
    },
  },
  {
    props: { size: 'large' },
    style: {
      height: 48,
    },
  }
];