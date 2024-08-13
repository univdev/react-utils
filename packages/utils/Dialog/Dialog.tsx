import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';
import { FC } from 'react';

export type DialogProps = MuiDialogProps;

export const Dialog: FC<DialogProps> = ({
  children,
  ...props
}) => {
  return (
    <MuiDialog { ...props }>
      { children }
    </MuiDialog>
  );
};
