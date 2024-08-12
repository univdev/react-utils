import { FC } from "react";
import { Button, ButtonProps } from "../Button";
import { styled } from "@mui/material";

export type ClickableAreaProps = Omit<ButtonProps, 'color' | 'variant'>;

export const ClickableArea: FC<ClickableAreaProps> = ({ children, ...props }) => {
  return (
    <Wrapper
      { ...props }
      color="inherit"
      variant="text"
    >
      { children }
    </Wrapper>
  );
};

const Wrapper = styled(Button)({
  minWidth: 'auto',
  minHeight: 'auto',
  backgroundColor: 'transparent',
  border: 'none',
});
