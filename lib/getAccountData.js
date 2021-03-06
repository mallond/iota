/**
 * Created by dm on 2/2/18.
 *
 */
'use strict';
const IOTA = require('iota.lib.js');


// Instantiate a new IOTA connection
const iota = new IOTA({
  'host': 'https://iotanode.us',
  'port': '443'
});

// Set transfer
let findBy = {
  SEED: process.env.SEED
};

iota.api.getAccountData(findBy.SEED, (err, response) => {
  console.log('This may take a a bit');
  if (err !== null) {
    /* Error */
    console.log(err.message);
  }
  else {
    /* SUCCESS IOTA WILL SEND */

    console.log(response);
  }
});


