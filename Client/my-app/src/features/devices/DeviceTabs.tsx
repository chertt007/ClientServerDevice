import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectTab } from "./devicesSlice";
const DeviceTabs: React.FC = () => {
  const dispatch = useDispatch();

  const selectedTab = useSelector((state: RootState) => state.devices.selectedDevice?.selectedTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(selectTab(newValue));
  };

  return (
    <Box>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="Device Tabs">
        <Tab label="Вкладка 1" />
        <Tab label="Вкладка 2" />
        <Tab label="Вкладка 3" />
        <Tab label="Вкладка 4" />
        <Tab label="Вкладка 5" />
      </Tabs>
    </Box>
  );
};

export default DeviceTabs;
