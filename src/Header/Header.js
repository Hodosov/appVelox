import React from 'react'
import styles from './Header.module.scss'
import { HeaderMenu } from './HeaderMenu'
import { UserMenu } from './UserMenu'

export const Header = () => {
    return(
        <div className={styles.header}>
            <h2 className={styles.title}>Мой профиль</h2>
            <div className={styles.headerMenu}>
            <HeaderMenu />
            <UserMenu />
            </div>
        </div>
    )
}