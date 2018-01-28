/**
 * Created by dm on 1/28/18.
 */
'use strict';

const helper = require('./helper');

const config = {
  url: process.env.IOTA_URL || 'http://localhost:14265',
  command: {
    'command': 'getNeighbors'
  },
  apiVersion: '1.4.1.7'
};

helper.execAPI(config.url,config.command,config.apiVersion);

