import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Device {
  id: number;
  status: "on" | "off";
}

interface DevicesState {
  devices: Device[];
  selectedDevice: Device | null;
}

const initialState: DevicesState = {
  devices: [
    { id: 1, status: "off" },
    { id: 2, status: "off" },
    { id: 3, status: "off" }
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
          state.selectedDevice = device; // обновляем selectedDevice
        }
      }
    }
  }
});

export const { selectDevice, toggleDeviceStatus } = devicesSlice.actions;
export default devicesSlice.reducer;
