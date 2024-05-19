import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import DeviceList from "./features/devices/DeviceList";
import DeviceDetails from "./features/devices/DeviceDetails";
import { CssBaseline, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

interface MainContentProps {
  open: boolean;
}

const MainContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open"
})<MainContentProps>(({ theme, open }) => ({
  flexGrow: 1,
  padding: (theme as Theme).spacing(3),
  transition: (theme as Theme).transitions.create("margin", {
    easing: (theme as Theme).transitions.easing.sharp,
    duration: (theme as Theme).transitions.duration.leavingScreen
  }),
  marginLeft: open ? 240 : 0
}));

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box display="flex">
        {isAuthenticated && <Sidebar />}
        <MainContent open={drawerOpen}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {isAuthenticated ? (
              <>
                <Route path="/" element={<DeviceDetails />} />
                <Route path="/device-details" element={<DeviceDetails />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </MainContent>
      </Box>
    </Router>
  );
};

export default App;
