import { DialogTitleProps as MuiDialogTitleProps } from '@mui/material';
import { FC } from 'react';
import { Typography } from '../Typography';

export type DialogTitleProps = MuiDialogTitleProps;

export const DialogTitle: FC<DialogTitleProps> = ({ children, ...props }) => {
  return (
    <DialogTitle { ...props }>
      { typeof children === 'string' ? <Typography variant="Title/1_SemiBold_16px">{ children }</Typography> : children }
    </DialogTitle>
  );
};
