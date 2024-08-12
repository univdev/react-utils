/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from "@emotion/css";
import { clsx } from "clsx";
import { ComponentType } from "react";

export type SafeAreaWrapperProps = {
  className?: string;
  children?: any;
  [key: string]: any;
};

export type SafeAreaProps<P> = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
} & P;

export function withSafeAreaGap<P extends SafeAreaWrapperProps>(Component: ComponentType<P>) {
  return function ({
    className,
    children,
    top,
    right,
    bottom,
    left,
    ...props
  }: SafeAreaProps<P>) {
    const dynamicClassName = css({
      paddingTop: top ? 'env(safe-area-inset-top)' : undefined,
      paddingRight: right ? 'env(safe-area-inset-right)' : undefined,
      paddingBottom: bottom ? 'env(safe-area-inset-bottom)' : undefined,
      paddingLeft: left ? 'env(safe-area-inset-left)' : undefined,
    });

    return (
      <Component className={clsx('SafeArea', className, dynamicClassName)} { ...props as SafeAreaProps<P> }>
        { children }
      </Component>
    );
  };
}
