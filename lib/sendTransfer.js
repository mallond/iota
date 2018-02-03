/**
 * Created by dm on 2/2/18.
 *
 * A super simple example to read and test. Nothing more nothing less
 * Important: This example needs a PoW server. Search for PoW server using the link below
 * http://iota.dance/nodes/
 *
 */
'use strict';
const IOTA = require('iota.lib.js');

// Config the SEED and MWM
const config = {
  SEED: process.env.SEED,
  MWM: 14
};

// Hard code these your self
let addressToSend = 'KFCGDIGXVFUDIOBVWPFEFPTPWRNVITTEHLRPWNJIMRCGJSRROZACATFSTQYZYQAFFNYTABFBLJNIPDPPBEKNOEAZNX';         // HERE ADDRESSE TO SEND IOTA TO (target)
let textToSend = 'Hello Moto, Love you Moto!++'; // MESSAGE TO SEND
let tag = 'HELLOMOTO';                  // TAG - ONLY 27 LETTERS (ABC..XYZ9) ARE ALLOWED
let value = 1;

// Instantiate a new IOTA connection
const iota = new IOTA({
  'host': 'https://iotanode.us',
  'port': '443'
});

// Convert textToSend to Trytes (important!)
let messageTrytes = iota.utils.toTrytes(JSON.stringify(textToSend));


// Set transfer
let transfer = [{
  'address': addressToSend,
  'value': parseInt(value),
  'message': messageTrytes,
  'tag': tag
}];

// Is the to address valid
if (iota.utils.isValidChecksum(addressToSend)) {
  console.log('Starting Transfer - This may take a minute or so...');
  iota.api.sendTransfer(config.SEED, 5, parseInt(config.MWM), transfer, (err, response) => {
    if (err !== null) {
      /* Error */
      console.log(err.message);
    }
    else {
      /* SUCCESS IOTA WILL SEND */
      console.log(response);
    }
  });
}
else {
  /* Adresse without Checksum */
  console.log('checksum');
}

