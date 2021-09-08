import cn from 'classnames'
import React from 'react'
import { Props } from './P.props'
import styles from './P.module.css'

const P = ({ children, size='middle', className, ...props }: Props) => {
    return (
        <p className={cn(styles.p, className, {
            [styles.small]: size === 'small',
            [styles.middle]: size === 'middle',
            [styles.large]: size === 'large',
        })}
        {...props}
        >
            {children}
        </p>
    )
}

export default P
