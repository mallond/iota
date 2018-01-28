/**
 * Created by dm on 1/28/18.
 */

/**
 * Created by dm on 1/28/18.
 */
'use strict';

const helper = require('./helper');


const addresses = ['TMLODRKYLAFQZWXEIEZDJCUJKRRSFYSAFCIFMV9IIVSDSI9XJIUY9XTFBSTFIDHBSIONWX9IE9RLDCFJZWUQGKEF9D'];
const config = {
  url: process.env.IOTA_URL || 'http://localhost:14265',
  command: {
    'command': 'getBalances',
    'addresses': addresses,
    'threshold':100,
  },
  apiVersion: '1.2.0'
};

helper.execAPI(config.url,config.command,config.apiVersion);

