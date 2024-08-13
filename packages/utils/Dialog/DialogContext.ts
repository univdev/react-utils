import { createContext, MouseEventHandler, ReactNode } from "react";
import { DialogProps } from "./Dialog";

export type IDialogContext = {
  items: Map<number, IDialogItem>;
  setItems: (items: Map<number, IDialogItem>) => void;
};

export type IDialogItem =
  | (IDefaultDialogItem & IAlertDialogItem)
  | (IDefaultDialogItem & IDynamicDialogItem);

export type IDefaultDialogItem = {
  open: boolean;
  type: 'alert' | 'dynamic';
  title: ReactNode;
  dialogProps?: DialogProps;
  onClose?: () => void;
};

export type IAlertDialogItem = {
  type: 'alert';
  message: ReactNode;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
}

export type IDynamicDialogItem = {
  type: 'dynamic',
  component: ReactNode | IDynamicDialogComponentFn;
};

export type IDynamicDialogComponentFn = (props: { close: () => void }) => ReactNode;

export type IDialogPropsWithoutOpen =
  | (Omit<IDefaultDialogItem, 'open'> & IAlertDialogItem)
  | (Omit<IDefaultDialogItem, 'open'> & IDynamicDialogItem);

export const DialogContext = createContext<IDialogContext | undefined>(undefined);
