import { FC, ReactNode } from "react";

export type ShowProps = {
  when: boolean;
  fallback?: ReactNode;
  children: ReactNode;
}

export const Show: FC<ShowProps> = ({ when, fallback, children }) => when ? children : fallback;
