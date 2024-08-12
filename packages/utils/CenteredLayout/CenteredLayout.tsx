import { CSSProperties } from 'react';
import { css } from '@emotion/css';
import { clsx } from 'clsx';
import { Layout, LayoutComponentVariants, LayoutProps } from '../Layout';

export type CenteredLayoutProps<T extends LayoutComponentVariants> = {
  as?: T;
  maxWidth?: CSSProperties['maxWidth'];
} & LayoutProps<T>;

export function CenteredLayout<T extends LayoutComponentVariants = 'div'>({
  as,
  maxWidth,
  className,
  children,
  ...props
}: CenteredLayoutProps<T>) {
  const dynamicClassName = css({
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth,
  });

  return (
    <Layout
      className={clsx('CenteredLayout', className, dynamicClassName)}
      as={as}
      fullWidth
      { ...props as CenteredLayoutProps<T> }
    >
      { children }
    </Layout>
  );
}