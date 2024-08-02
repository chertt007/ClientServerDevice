import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { selectDevice } from "./devicesSlice";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DeviceList = () => {
  const devices = useSelector((state: RootState) => state.devices.devices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeviceClick = (deviceId: number) => {
    dispatch(selectDevice(deviceId));
    navigate("/device-details");
  };
  return (
    <List>
      {devices.map((device) => (
        <ListItem
          button
          key={device.id}
          onClick={
            () => onDeviceClick(device.id)
            // () => dispatch(selectDevice(device.id))
          }
        >
          <ListItemText primary={`Device ${device.id}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default DeviceList;
