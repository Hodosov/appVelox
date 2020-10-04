import React from 'react'
import styles from './SideBar.module.scss'

export const MenuItem = ({title, icon}) => {
    return(
        <div className={styles.menuItem} >
            {icon &&  <img src={icon} alt="logo" />}
                <span className={styles.title}>{title}</span>
        </div>
    )
}