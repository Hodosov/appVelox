import React from 'react'
import styles from './Header.module.scss'
import { Avatar } from '../Avatar/Avatar'
import openIcon from '../icons/headerIcon/open.svg'

export const UserMenu = () => {
    return(
        <div className={styles.userMenu}>
            <Avatar />
            <div>
            <img src={openIcon} alt="" />
            </div>
        </div>
    )
}
