import { Avatar } from '@material-ui/core'
import React from 'react'
import '../CssOfComponents/SidebarOption.css'

function SidebarOption({ src, Icon , title}) {
    return (
        <div className="sidebar_option">
            { src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarOption
