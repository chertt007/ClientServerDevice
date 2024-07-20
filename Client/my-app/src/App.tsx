// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import DeviceList from "./features/devices/DeviceList";
import DeviceDetails from "./features/devices/DeviceDetails";
import WelcomePage from "./components/WelcomePage";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { styled, Theme } from "@mui/material/styles";

interface MainContentProps {
  open: boolean;
}

const MainContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open"
})<MainContentProps>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: open ? 240 : 0
}));

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "auto">("auto");
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode") as "light" | "dark" | "auto";
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    }
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (themeMode === "auto") {
      setTheme(currentHour >= 18 || currentHour < 6 ? darkTheme : lightTheme);
    } else {
      setTheme(themeMode === "dark" ? darkTheme : lightTheme);
    }
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleThemeChange = (mode: "light" | "dark" | "auto") => {
    setThemeMode(mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar handleDrawerToggle={handleDrawerToggle} handleThemeChange={handleThemeChange} />
        <Box display="flex">
          {isAuthenticated && <Sidebar />}
          <MainContent open={drawerOpen}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {isAuthenticated ? (
                <>
                  <Route path="/devices" element={<DeviceList />} />
                  <Route path="/device-details" element={<DeviceDetails />} />
                  <Route path="*" element={<Navigate to="/devices" />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </MainContent>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
