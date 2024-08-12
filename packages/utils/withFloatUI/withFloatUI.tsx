import { css } from "@emotion/css";
import { clsx } from "clsx";
import { CSSProperties, FC } from "react";

type FloatType = 'top' | 'bottom';

export type WithFloatUIRequiredProps = {
  className?: string;
  style?: CSSProperties;
};

export type WithFloatUIComponentProps<P> = {
  type: FloatType;
  position?: 'absolute' | 'relative';
} & P;

export function withFloatUI<P extends WithFloatUIRequiredProps>(Component: FC<P>) {
  return function({ type, position, ...props }: WithFloatUIComponentProps<P>) {
    const dynamicClassName = css({
      position: position ?? 'absolute',
      width: '100%',
      top: type === 'top' ? 0 : undefined,
      bottom: type === 'bottom' ? 0 : undefined,
      left: 0,
    });

    return (
      <Component className={clsx('WithFloatUI', dynamicClassName)} {...props as WithFloatUIComponentProps<P>} />
    );
  };
}
