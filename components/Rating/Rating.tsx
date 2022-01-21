import { useEffect, useState, KeyboardEvent } from 'react'
import styles from './Rating.module.css'
import cn from 'classnames'
import { Props } from './Rating.props'
import StartIcon from './star.svg'

const Rating = ({ rating, setRating, isEditable = false, children,  className, ...props }: Props) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((item, i) => {
         return (
             <StartIcon 
                className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                })}
                key={i}
                tabIndex={isEditable ? 0 : -1}
                onMouseEnter={() => handleHover(i+1)}
                onMouseLeave={() => constructRating(rating)}
                onClick={() => handleClick(i+1)}
                onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpaceClick(e, i+1)}
             />
         ) 
        })
        setRatingArray(updatedArray)
    }

    const handleHover = (i: number) => {
        if(!isEditable) return
        constructRating(i)
    }

    const handleClick = (i: number) => {
        if(!isEditable || !setRating) return
        setRating(i)
    } 

    const handleSpaceClick = (e: KeyboardEvent<SVGElement>, i: number) => {
        if(e.code !== 'Space' || !setRating) return
        setRating(i)
    }

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    return (
        <div {...props}>
            {ratingArray.map((item, i) => <span key={i}>{item}</span>)}
        </div>
    )
}

export default Rating
