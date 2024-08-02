// src/components/Navbar.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { WiDaySunny } from "react-icons/wi";
import { WiMoonFull } from "react-icons/wi";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

interface NavbarProps {
  handleDrawerToggle: () => void;
  handleThemeChange: (mode: "light" | "dark" | "auto") => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle, handleThemeChange }) => {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">(
    (localStorage.getItem("themeMode") as "light" | "dark" | "auto") || "auto"
  );

  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const handleThemeToggle = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: "light" | "dark" | "auto"
  ) => {
    if (newTheme !== null) {
      setTheme(newTheme);
      handleThemeChange(newTheme);
    }
  };

  const toggleThemeMenu = () => {
    setThemeMenuOpen(!themeMenuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Device Management
        </Typography>
        <Box display="flex" alignItems="center" marginLeft="auto">
          <IconButton onClick={toggleThemeMenu} color="inherit">
            <WiMoonAltFirstQuarter />
          </IconButton>
          {themeMenuOpen && (
            <Box display="flex" alignItems="center">
              <ToggleButtonGroup
                value={theme}
                exclusive
                onChange={handleThemeToggle}
                aria-label="theme mode"
                color="primary"
              >
                <Tooltip title="Light Theme">
                  <ToggleButton value="light" aria-label="light theme">
                    <WiDaySunny fill="white" />
                  </ToggleButton>
                </Tooltip>
                <Tooltip title="Dark Theme">
                  <ToggleButton value="dark" aria-label="dark theme">
                    <WiMoonFull />
                  </ToggleButton>
                </Tooltip>
                <Tooltip title="Auto Theme">
                  <ToggleButton value="auto" aria-label="auto theme">
                    <WiMoonAltFirstQuarter />
                  </ToggleButton>
                </Tooltip>
              </ToggleButtonGroup>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
