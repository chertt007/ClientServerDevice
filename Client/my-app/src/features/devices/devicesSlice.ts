import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Device {
  id: number;
  status: "on" | "off";
  selectedTab: number;
}

interface DevicesState {
  devices: Device[];
  selectedDevice: Device | null;
}

const initialState: DevicesState = {
  devices: [
    { id: 1, status: "off", selectedTab: 0 },
    { id: 2, status: "off", selectedTab: 0 },
    { id: 3, status: "off", selectedTab: 0 }
  ],
  selectedDevice: null
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    selectDevice(state, action: PayloadAction<number>) {
      state.selectedDevice = state.devices.find((device) => device.id === action.payload) || null;
    },
    toggleDeviceStatus(state) {
      if (state.selectedDevice) {
        const device = state.devices.find((device) => device.id === state.selectedDevice!.id);
        if (device) {
          device.status = device.status === "on" ? "off" : "on";
          state.selectedDevice = device;
        }
      }
    },
    selectTab(state, action: PayloadAction<number>) {
      if (state.selectedDevice) {
        // Обновляем выбранную вкладку в selectedDevice
        state.selectedDevice.selectedTab = action.payload;
        // Находим устройство в списке devices и обновляем его
        const device = state.devices.find((device) => device.id === state.selectedDevice!.id);
        if (device) {
          device.selectedTab = action.payload;
        }
      }
    }
  }
});

export const { selectDevice, toggleDeviceStatus, selectTab } = devicesSlice.actions;
export default devicesSlice.reducer;
