import React from 'react'
import styles from './Button.module.scss'

export const Button = ({title}) => {
    return(
        <div className={styles.button}>
            {title}
        </div>
    )
}