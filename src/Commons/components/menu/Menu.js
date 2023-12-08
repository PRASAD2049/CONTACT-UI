import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useState } from "react";
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const options = [
    {
        name: 'contacts',
        link: '/contact/summary'
    },
    {
        name: 'payments',
        link: '/payments'
    }
  ];
  
export function NavMenu() {

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        { <MenuIcon /> }
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option.name} onClick={handleClose}>
            <NavLink to={option.link} >
            {option.name}
            </NavLink>

          </MenuItem>
        ))}
      </Menu>
    </div>
  )

}