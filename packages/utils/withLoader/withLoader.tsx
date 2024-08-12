/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { styled } from "@mui/material";
import { clsx } from "clsx";
import { ComponentType, CSSProperties, ReactNode, useEffect, useState } from "react";
import { Show } from "../Show";

export type WithLoaderComponentRequiredProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export type WithLoaderProps<P> = {
  hasNext?: boolean;
  onLoad?: () => Promise<any>;
} & P;

export function withLoader<P extends WithLoaderComponentRequiredProps>(Component: ComponentType<P>) {
  return function({
    className,
    style,
    hasNext = false,
    onLoad,
    ...props
  }: WithLoaderProps<P>) {
    const [loader, setLoader] = useState<HTMLDivElement>();

    useEffect(() => {
      if (loader) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onLoad?.();
            }
          });
        });

        observer.observe(loader);

        return () => {
          observer.disconnect();
        };
      }
    }, [loader, onLoad]);

    return (
      <Component
        className={clsx('withLoader', className)}
        style={{ ...style, position: 'relative' }}
        { ...props as WithLoaderProps<P> }
      >
        { props.children }
        <Show when={hasNext}>
          <DefaultLoader ref={(element) => element && setLoader(element)} /> 
        </Show>
      </Component>
    );
  };
}

const DefaultLoader = styled('div')({
  position: 'absolute',
  left: 0,
  bottom: 0,
  opacity: 0,
  width: '100%',
  height: 10,
  backgroundColor: 'black',
});
