import { css } from "@emotion/css";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

export type ListComponentVariant = 'ul' | 'li';

export type ListDirection = 'horizontal' | 'vertical';

export type ListProps<T> = {
  ordered?: boolean;
  iteration: T[];
  children: (item: T, index: number) => ReactNode;
  direction?: ListDirection;
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  fullWidth?: boolean;
} & Omit<ComponentPropsWithoutRef<ListComponentVariant>, 'children'>;

export function List<T>({
  ordered,
  iteration,
  children,
  direction = 'horizontal',
  rowGap,
  columnGap,
  fullWidth,
}: ListProps<T>) {
  const Wrapper = ordered ? 'ol' : 'ul';
  const dynamicClassName = css({
    display: 'flex',
    width: fullWidth ? '100%' : undefined,
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    rowGap,
    columnGap,
  });
  
  return (
    <Wrapper className={clsx('List', dynamicClassName)}>
      {
        iteration.map((item, index) => (
          <li className="List__Item" key={index}>
            { children(item, index) }
          </li>
        ))
      }
    </Wrapper>
  );
}
