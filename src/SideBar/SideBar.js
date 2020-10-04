import React from 'react'
import styles from './SideBar.module.scss'
import { Logo } from './Logo'
import { MenuItem } from './MenuItem'
import { Footer } from './Footer'
import { Button } from '../Button/Button'
import profileIcon from '../icons/profileIcon.svg'
import doctsICon from '../icons/doctsICon.svg'
import messIcon from '../icons/messIcon.svg'
import testIcon from '../icons/testIcon.svg'
import infoIcon from '../icons/infoIcon.svg'


const data = [
    {id: '1', title: 'Профиль', icon: profileIcon },
    {id: '2', title: 'Врачи и клиники', icon: doctsICon },
    {id: '3', title: 'Сообщения', icon: messIcon },
    {id: '4', title: 'Тестирование', icon: testIcon },
    {id: '5', title: 'Полезно знать', icon: infoIcon },
]

export const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <div>
            <Logo />
            { data.map(el => <MenuItem key={el.id} title={el.title} icon={el.icon} />)}
            <Button title='Подать заявку' />
            </div>
            <Footer />
        </div>
    )
}