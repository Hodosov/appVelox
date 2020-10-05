import React from 'react'
import styles from './Header.module.scss'
import search from '../icons/headerIcon/search.svg'
import bell from '../icons/headerIcon/bell.svg'
import eye from '../icons/headerIcon/eye.svg'

const icons = [search, bell, eye]

export const HeaderMenu = () => {
    return(
       <div className={styles.headerMenu}>
           { icons.map((e, index) => <div className={styles.headerIcon}><img key={index} src={e} alt="" /></div>)}
       </div>
    )
}