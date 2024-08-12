/* eslint-disable react/prop-types */
import React, { forwardRef, ComponentPropsWithoutRef, CSSProperties, ForwardedRef } from "react";
import { css } from "@emotion/css";
import { clsx } from "clsx";

export type LayoutComponentVariants =
  'div'
  | 'main'
  | 'aside'
  | 'section'
  | 'article'
  | 'header'
  | 'footer'
  | 'nav';

export type LayoutProps<T extends LayoutComponentVariants> = {
  as?: T;
} & ComponentPropsWithoutRef<T> & LayoutStyleProps;

export type LayoutStyleProps = {
  display?: CSSProperties['display'];
  position?: CSSProperties['position'];
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  padding?: CSSProperties['padding'];
  overflow?: CSSProperties['overflow'];
  fitViewportHeight?: boolean;
  backgroundColor?: CSSProperties['backgroundColor'];
}

export const Layout = forwardRef<
  HTMLElement, // ref의 타입을 지정합니다.
  LayoutProps<LayoutComponentVariants> // props의 타입을 지정합니다.
>(
  (
    {
      as,
      children,
      className,
      style,
      display,
      position,
      fullWidth,
      fullHeight,
      width,
      height,
      maxWidth,
      maxHeight,
      overflow,
      backgroundColor,
      fitViewportHeight,
      padding,
      ...props
    },
    ref,
  ) => {
    const Wrapper = as ?? 'div';

    const dynamicClassName = css({
      display,
      position,
      width: fullWidth ? '100%' : width,
      height: fitViewportHeight ? '100vh' : fullHeight ? '100%' : height,
      maxWidth,
      maxHeight,
      overflow,
      backgroundColor,
      padding,
    });

    return (
      <Wrapper
        ref={ref as ForwardedRef<HTMLDivElement>}
        className={clsx('Layout', className, dynamicClassName)}
        style={style}
        {...props}
      >
        {children}
      </Wrapper>
    );
  }
);

Layout.displayName = "Layout";
