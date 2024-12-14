import { DjiDevice } from './dist/index.js';

import { DjiDeviceScanner } from './dist/index.js';
const { shared: scanner } = DjiDeviceScanner;
console.log('Starting DJI device scanner...');
scanner.startScanningForDevices();

scanner.on('deviceDiscovered', async ({ peripheral, model, modelName }) => {
  const device = new DjiDevice();
  console.log('Discovered device:', device, peripheral, model, modelName);
});

scanner.stopScanningForDevices();
