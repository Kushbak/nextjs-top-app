import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean
    rating: number
    setRating?: (rating: number) => void  
}