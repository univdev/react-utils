/* eslint-disable react/prop-types */
import React, { forwardRef, CSSProperties } from "react";
import { Layout, LayoutComponentVariants, LayoutProps } from "../Layout";
import { css } from "@emotion/css";
import { clsx } from "clsx";

export type FlexProps<T extends LayoutComponentVariants> = Omit<LayoutProps<T>, 'display'> & FlexStyleProps;

export type FlexStyleProps = {
  flex?: CSSProperties['flex'];
  flexDirection?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  radius?: CSSProperties['borderRadius'];
  border?: CSSProperties['border'];
  borderColor?: CSSProperties['borderColor'];
  borderWidth?: CSSProperties['borderWidth'];
  borderStyle?: CSSProperties['borderStyle'];
};

export const Flex = forwardRef<
  HTMLElement,
  FlexProps<LayoutComponentVariants>
>(
  (
    {
      className,
      flex,
      children,
      flexDirection,
      alignItems,
      justifyContent,
      rowGap,
      columnGap,
      radius,
      borderColor,
      borderStyle,
      borderWidth,
      border,
      ...props
    },
    ref,
  ) => {
    const dynamicClassName = css({
      display: 'flex',
      flex,
      flexDirection,
      alignItems,
      justifyContent,
      rowGap,
      columnGap,
      borderRadius: radius,
      borderColor,
      borderWidth,
      borderStyle,
      border,
    });

    return (
      <Layout
        ref={ref}
        className={clsx('Flex', className, dynamicClassName)}
        {...props}
      >
        {children}
      </Layout>
    );
  }
);

Flex.displayName = "Flex";
