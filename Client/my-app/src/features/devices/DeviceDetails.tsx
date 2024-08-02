import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { toggleDeviceStatus } from "./devicesSlice";
import { Box, Typography, Switch, FormControlLabel, Tabs, Tab } from "@mui/material";
import DeviceTabs from "./DeviceTabs";
import DeviceInfo from "./DeviceInfo";

const DeviceDetails = () => {
  const selectedDevice = useSelector((state: RootState) => state.devices.selectedDevice);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    dispatch(toggleDeviceStatus());
  };

  return (
    <Box padding={3}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <Box flex={1}>
            {selectedDevice ? (
              <>
                <Typography variant="h4">Device {selectedDevice.id}</Typography>
                <Typography>Status: {selectedDevice.status}</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={selectedDevice.status === "on"}
                      onChange={handleToggle}
                      name="deviceStatus"
                    />
                  }
                  label="Toggle Status"
                />
              </>
            ) : (
              <Typography variant="h6">Выберите устройство</Typography>
            )}
          </Box>
          <DeviceTabs />
        </Box>
        <DeviceInfo />
      </Box>
    </Box>
  );
};

export default DeviceDetails;
