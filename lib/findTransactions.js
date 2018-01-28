/**
 * Created by dm on 1/28/18.
 */

/**
 * Created by dm on 1/28/18.
 */
'use strict';

const helper = require('./helper');

/**
 bundles	list	Optional	List of bundle hashes.
 addresses	list	Optional	List of addresses.
 tags	    list	Optional	List of tags. Has to be 27 trytes.
 approvees	list	Optional	List of approvee transaction hashes.
 */

const config = {
  url: process.env.IOTA_URL || 'http://localhost:14265',
  command: {
    'command': 'findTransactions',
     'addresses':["RVORZ9SIIP9RCYMREUIXXVPQIPHVCNPQ9HZWYKFWYWZRE9JQKG9REPKIASHUUECPSQO9JT9XNMVKWYGVAZETAIRPTM"],
     //'bundles':["LDSAWPPMCFBAFSH99BP9ZWQRQFDFBEFYDLPXUW9NVEJP9XBXQTDCZVYZRBSUGPKAQMMMPMIJCXXX99999"]
  },
  apiVersion: '1.2.0'
};

helper.execAPI(config.url,config.command,config.apiVersion);

