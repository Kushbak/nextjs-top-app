import cn from 'classnames'
import React from 'react'
import { Props } from './Tag.props'
import styles from './Tag.module.css'

const Tag = ({ children, size='middle', color='ghost', href, className, ...props }: Props) => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size === 'small',
            [styles.middle]: size === 'middle',
            [styles.ghost]: color === 'ghost',
            [styles.green]: color === 'green',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.primary]: color === 'primary',
        })}
        {...props}
        >
            {
                href 
                    ? <a href={href}>{children}</a>
                    : <></>
            }
        </div>
    )
}

export default Tag
