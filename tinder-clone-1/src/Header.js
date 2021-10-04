import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import FormIcon from '@material-ui/icons/Forum'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <IconButton>
                <PersonAddIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img 
            className="header__logo" 
            src="data:image/jpeg;base64,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" 
            // src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg"
            alt=""
            />
            
            <IconButton>
                <PersonAddDisabledIcon fontSize="large" className="header__icon" />
            </IconButton>
            
            <IconButton>
                <FormIcon fontSize="large" className="header__icon" />
            </IconButton>
            
        </div>
    )
}

export default Header