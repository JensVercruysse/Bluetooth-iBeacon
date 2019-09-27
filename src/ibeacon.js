const bleno = require("@abandonware/bleno");

// Set your own UUID
const UUID = "fa66c88b-f175-4097-ae0b-a17f1c3b343b";

// Choose a value
const MINOR = 2;

// Choose a value
const MAJOR = 1;

// RSSI at 1m distance (for distance calculation)
const TX_POWER = -60;

console.log("Starting bleno ...");
bleno.on("stateChange", state => {
  if (state === "poweredOn") {
    console.log("Starting broadcast ...");

    bleno.startAdvertisingIBeacon(UUID, MAJOR, MINOR, TX_POWER, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`iBeacon uuid: ${UUID}, major: ${MAJOR}, minor: ${MINOR}`);
      }
    });
  } else {
    console.log("Stopping broadcast ...");
    bleno.stopAdvertising();
  }
});
