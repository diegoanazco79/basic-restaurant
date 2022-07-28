import React from 'react';
import { Divider, Drawer, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles';

function Menu({ open, handleDrawerClose, DrawerHeader }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.mainDrawer}
      variant='persistent'
      anchor='left'
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Divider />
    </Drawer>
  );
}

export default Menu;
