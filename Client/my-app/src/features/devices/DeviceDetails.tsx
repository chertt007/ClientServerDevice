import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { toggleDeviceStatus } from "./devicesSlice";
import { Container, Typography, Switch, FormControlLabel } from "@mui/material";

const DeviceDetails = () => {
  const selectedDevice = useSelector((state: RootState) => state.devices.selectedDevice);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDeviceStatus());
  };

  return (
    <Container>
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
    </Container>
  );
};

export default DeviceDetails;
