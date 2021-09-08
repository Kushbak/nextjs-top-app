import React from 'react'
import { Props } from './Button.props'
import Image from 'next/image'
import cn from 'classnames'
import styles from './Button.module.css'
import ArrowIcon from './arrow.svg'

const Button = ({ children, appearance,  arrow = 'none', className, ...props }: Props): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
            {
                arrow !== 'none'
                && <span className={cn(styles.arrow, {
                    [styles.down]: arrow === 'down',
                })}>
                    <ArrowIcon />
                </span>
            }
        </button>
    )
}   

export default Button
