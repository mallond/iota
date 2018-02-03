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
  //hashes:['DZHCBZIISOIQOM9DPZSFBSJPYPJPDKA9ESLLIDTYMMBLPOHVF9HMAMVPRTZXUWIS9MCGYAHEAMETA9999'],
  //addresses: ['DZHCBZIISOIQOM9DPZSFBSJPYPJPDKA9ESLLIDTYMMBLPOHVF9HMAMVPRTZXUWIS9MCGYAHEAMETA9999'],
  bundles:['XFBVAUVCIIQHTIQEQJKQGLUK9AGIHCJLDOQIJFJHUHOISBC9CHOBYWASLYWLFBWQC9KED9EEPUQTQCFJC']
};

iota.api.findTransactionObjects(findBy, (err, response) => {
  console.log('This may take a a bit');
  if (err !== null) {
    /* Error */
    console.log(err.message);
  }
  else {
    const message = response[response.length-1].signatureMessageFragment;
    console.log(message)
    const from = response[response.length-1].signatureMessageFragment.indexOf('999999999');
    const stringToTranslate = response[response.length-1].signatureMessageFragment.slice(0,from);
    console.log(iota.utils.fromTrytes(stringToTranslate));
  }
});


