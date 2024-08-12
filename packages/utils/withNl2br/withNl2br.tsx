import { FC, Fragment, ReactNode, useMemo } from "react";

export type Nl2brComponentRequiredProps = {
  children?: ReactNode;
}

export function withNl2br<P extends Nl2brComponentRequiredProps>(Component: FC<P>) {
  return function({ children, ...props }: P) {
    const newChildren = useMemo(() => {
      let result = children;

      if (typeof result === 'string') {
        result = result.split('\n').map((content, index) => <Fragment key={index}>{ content }<br /></Fragment>);
      }

      return result;
    }, [children]);

    return (
      <Component
        { ...props as P }
      >
        { newChildren }
      </Component>
    );
  };
}
