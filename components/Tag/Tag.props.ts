import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
    size?: 'small' | 'middle'
    color?: 'ghost' | 'red' | 'green' | 'primary' | 'grey'
    href?: string
}