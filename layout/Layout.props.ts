import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}