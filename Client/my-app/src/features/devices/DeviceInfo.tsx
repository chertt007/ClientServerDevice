import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface DeviceInfoProps {}

const DeviceInfo: React.FC<DeviceInfoProps> = () => {
  const device = useSelector((state: RootState) => state.devices.selectedDevice);
  return (
    <Box marginTop={2}>
      {device ? (
        <>
          <Typography variant="h6">Информация об устройстве</Typography>
          <Typography>Устройство ID: {device.id}</Typography>
          <Typography>Статус: {device.status}</Typography>
          <Typography>Выбранная вкладка: Вкладка {device.selectedTab + 1}</Typography>
        </>
      ) : (
        <Typography variant="h6">Нет выбранного устройства</Typography>
      )}
    </Box>
  );
};

export default DeviceInfo;
