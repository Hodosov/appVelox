import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
    return(
        <div className={styles.header}>
            <h2 className={styles.title}>Мой профиль</h2>
        </div>
    )
}