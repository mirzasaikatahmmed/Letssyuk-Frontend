import type { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface BaseComponentProps {
  className?: string;
  id?: string;
}
