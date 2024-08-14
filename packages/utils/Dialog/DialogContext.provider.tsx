import { FC, Fragment, ReactNode, useCallback, useState } from "react";
import { match } from 'ts-pattern';
import { DialogContext, IDialogItem, IDialogPropsWithoutOpen } from "./DialogContext";
import { Dialog } from "./Dialog";
import { DialogTitle } from "./DialogTitle";
import { Typography } from "../Typography";
import { DialogContent } from "./DialogContent";
import { DialogActions } from "./DialogActions";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { useTheme } from "../useTheme";

export type DialogContextProviderProps = { children?: ReactNode };

export const DialogContextProvider: FC<DialogContextProviderProps> = ({
  children,
}) => {
  const theme = useTheme();
  const [items, setItems] = useState<Map<number, IDialogItem>>(new Map());

  const remove = useCallback((index: number) => {
    const clone = new Map(items);
    clone.delete(index);

    setItems(clone);
  }, [items]);

  const set = useCallback((index: number, props: IDialogItem) => {
    const clone = new Map(items);
    clone.set(index, props);

    setItems(clone);
  } ,[items]);

  const onClose = useCallback((index: number, props: IDialogPropsWithoutOpen) => {
    set(index, { ...props, open: false });
  }, [set]);

  return (
    <DialogContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      { children }
      {
        Array.from(items).map(([index, props]) => (
          <Dialog
            key={index}
            open={props.open}
            onClose={() => {
              props.onClose?.();
              onClose(index, props);
            }}
            TransitionProps={{
              onExited: () => remove(index)
            }}
          >
            {
              match({ ...props })
                .with({ type: 'alert' }, ({ title, message, confirmButtonLabel, cancelButtonLabel, onConfirm, onCancel }) => (
                  <Fragment>
                    <DialogTitle>
                      { title }
                    </DialogTitle>
                    <DialogContent>
                      <Typography variant="Body/2_Regular_14px">
                        { message }
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Flex fullWidth columnGap={theme.spacing(4)} alignItems="center" justifyContent="space-between">
                        <Button variant="contained" color="info" fullWidth onClick={onCancel}>
                          { cancelButtonLabel }
                        </Button>
                        <Button variant="contained" color="primary" fullWidth onClick={onConfirm}>
                          { confirmButtonLabel }
                        </Button>
                      </Flex>
                    </DialogActions>
                  </Fragment>
                ))
                .with({ type: 'dynamic' }, ({ title, component }) => (
                  <Fragment>
                    <DialogTitle>
                      { title }
                    </DialogTitle>
                    <DialogContent>
                      {
                        typeof component === 'function'
                          ? component({ close: () => onClose(index, props) })
                          : component
                      }
                    </DialogContent>
                  </Fragment>
                ))
                .otherwise(() => false)
            }
          </Dialog>
        ))
      }
    </DialogContext.Provider>
  );
};
