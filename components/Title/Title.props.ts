import { DetailedHTMLProps, HTMLAttributes } from "react";

type Tags  = 'h1' | 'h2' | 'h3'
export interface Props{
    tag: Tags
    children: React.ReactNode
}