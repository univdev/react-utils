import { styled } from '@mui/material';
import { HTMLAttributes, ReactNode } from 'react';

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  ratio: `${string}:${string}`;
}

export const AspectRatio = ({ children, ratio, ...others }: AspectRatioProps) => {
  const [width, height] = ratio.split(':');
  const paddingBottom = (Number(height) / Number(width)) * 100;

  return (
    <AspectRatioWrapper
      {...others}
      className={others.className}
      style={{
        ...others.style,
        paddingBottom: `${paddingBottom}%`,
      }}
    >
      <AspectRatioContainer className="AspectRatio__Container">
        <AspectRatioContent className="AspectRatio__Content">{children}</AspectRatioContent>
      </AspectRatioContainer>
    </AspectRatioWrapper>
  );
};

const AspectRatioWrapper = styled('div')`
  position: relative;
  width: 100%;
`;

const AspectRatioContainer = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const AspectRatioContent = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
`;
