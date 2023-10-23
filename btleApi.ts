/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";
import { BleManager, Device, BleRestoredState } from "react-native-ble-plx"

interface BluetoothApi {
    requestPermissions(): Promise<boolean>;
    scanPeripherals(): void;
}

function useBtle(): BluetoothApi {
    const btleManager = useMemo(() => new BleManager(restoreStateIdentifier, restoreStateFunction), []);
    const [allDevices, setAllDevices] = useState<Device[]>([]);
}