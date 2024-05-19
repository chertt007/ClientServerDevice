import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { selectDevice } from "./devicesSlice";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const DeviceList = () => {
  const devices = useSelector((state: RootState) => state.devices.devices);
  const dispatch = useDispatch();

  return (
    <List>
      {devices.map((device) => (
        <ListItem button key={device.id} onClick={() => dispatch(selectDevice(device.id))}>
          <ListItemText primary={`Device ${device.id}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default DeviceList;
