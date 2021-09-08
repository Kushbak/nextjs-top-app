import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode
    size?: 'small' | 'middle' | 'large'
}