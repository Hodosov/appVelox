import React from 'react'
import { MenuItem } from './MenuItem'
import logo from '../icons/sidebarIcons/footer.svg'
import helpIcon from '../icons/sidebarIcons/helpIcon.svg'

export const Footer = () => {
    return (
        <div>
            <MenuItem title='Помощь' icon={helpIcon} />
            <img src={logo} alt="logo" />
        </div >
    )
}