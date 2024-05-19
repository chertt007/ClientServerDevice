import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import styled from 'styled-components';

interface NavbarProps {
  handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          Device Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
