import { FC, Fragment, ReactNode, useCallback, useState } from "react";
import { match } from 'ts-pattern';
import { DialogContext, IDialogItem, IDialogPropsWithoutOpen } from "./DialogContext";
import { Dialog } from "./Dialog";

export type DialogContextProviderProps = { children?: ReactNode };

export const DialogContextProvider: FC<DialogContextProviderProps> = ({
  children,
}) => {
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
              match({ type: props.type })
                .with({ type: 'alert' }, () => (
                  <Fragment>
                    asd
                  </Fragment>
                ))
                .with({ type: 'dynamic' }, () => (
                  <Fragment>
                    qwe
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
