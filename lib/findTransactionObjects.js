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
  addresses: ['RVPRJTRZLMHIE9GMVDALB9L9VZ9HWMFZICGJKMSPULSTERSFXVJWLFQHXYUVQIJ9ETVPNMACTYXWMXSDWASFG9BXED',
  'DWKIUIMMPTMHFBADDMST9FJWCZLQDXBVUVMOSF9IDOFNUAIBJZLMW9SZMKNUBPWRUQZTI9NIOCIWYGKRWS9SENXXCW',
  'DXZGTFQPXZJRLLDSELKJHJDUARPCIWLGSQSCCEIVTDPPKLUSGYGU9NBBGZQDNXRLDVJKWDEEQBDTFYO9B',
  'ZLDHVPEYWYWJM9QAFETNBTDRQRWBSPGPUJFPTUTGPQD9KVSVMUAFLUIWMLONDIDRBTTVNQLZWL9TJUKKCZAOT9EPNA']
};

iota.api.findTransactionObjects(findBy, (err, response) => {
  console.log('This may take a a bit');
  if (err !== null) {
    /* Error */
    console.log(err.message);
  }
  else {
    /* SUCCESS IOTA WILL SEND */
    let compare=(a,b)=> {
      if (a.address < b.address)
        return -1;
      if (a.address > b.address)
        return 1;
      return 0;
    };

    response.sort(compare);
    let details = {};
    response.map((object, index)=>{

      console.log(object.address+': '+object.value+': '+object.tag);
    });

  }
});


