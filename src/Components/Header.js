import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutLinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutLinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import '../CssOfComponents/Header.css'
import logo from '../default.png'
import { Avatar, IconButton } from '@material-ui/core'
import NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ForumIcon from '@material-ui/icons/Forum'
import { useDataLayerValue } from '../HelperTool/DataLayer'


function Header() {
  const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo}  />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="search codebook" type="text"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option__active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutLinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutLinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
