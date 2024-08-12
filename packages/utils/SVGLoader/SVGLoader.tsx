import { CSSProperties, FC, useCallback, useEffect, useRef } from "react";
import InlineSVG, { PreProcessorCallback } from 'react-inlinesvg';

export type SVGLoaderProps = {
  className?: string;
  style?: CSSProperties;
  src: string;
  width: number;
  height: number;
  stroke?: CSSProperties['stroke'];
  fill?: CSSProperties['fill'];
};

export const SVGLoader: FC<SVGLoaderProps> = ({
  className,
  style,
  src,
  width,
  height,
  stroke,
  fill,
}) => {
  const svgElement = useRef<SVGElement>(null);
  const preProcessor = useCallback<PreProcessorCallback>((svg) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(svg, 'image/svg+xml');
    const paths = dom.querySelectorAll('path');

    for (const path of paths) {
      if (fill) path?.setAttribute('fill', fill);
      if (stroke) path.setAttribute('stroke', stroke);
    }

    return dom.documentElement.outerHTML;
  }, [fill, stroke]);

  useEffect(() => {
    svgElement.current?.querySelector('path')?.setAttribute('fill', fill ?? 'none');
  }, [fill]);

  useEffect(() => {
    svgElement.current?.querySelector('path')?.setAttribute('stroke', stroke ?? 'none');
  }, [stroke]);

  return (
    <InlineSVG
      innerRef={svgElement}
      className={className}
      style={style}
      src={src}
      width={width}
      height={height}
      preProcessor={preProcessor}
    />
  );
};
