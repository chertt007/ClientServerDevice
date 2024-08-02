import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { selectDevice } from "../features/devices/devicesSlice";
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const devices = useSelector((state: RootState) => state.devices.devices);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    if (isAuthenticated) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex">
      <Drawer variant="persistent" anchor="left" open={open}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 1
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <List>
          {devices.map((device) => (
            <ListItem button key={device.id} onClick={() => dispatch(selectDevice(device.id))}>
              <ListItemText primary={`Device ${device.id}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {!open && (
        <IconButton onClick={handleDrawerOpen}>
          <ChevronRight />
        </IconButton>
      )}
    </Box>
  );
};

export default Sidebar;
