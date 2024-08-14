import { useCallback, useContext, useRef } from "react";
import { DialogContext, IDialogItem, IDialogPropsWithoutOpen } from "./DialogContext";

export const useDialog = () => {
  const context = useContext(DialogContext);

  if (context === undefined) throw new Error('DialogContext is not defined.');
  
  const index = useRef(0);
  const { items, setItems } = context;

  const add = useCallback((props: IDialogItem) => {
    const currentIndex = index.current;
    const clone = new Map(items);
    clone.set(currentIndex, props);

    setItems(clone);
    index.current += 1;
  }, [items]);
  
  const fire = useCallback((props: IDialogPropsWithoutOpen) => {
    add({ ...props, open: true });
  }, []);

  return { fire };
};
