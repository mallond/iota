/**
 * Created by dm on 1/28/18.
 */
'use strict';

const helper = require('./helper');

const config = {
  url: process.env.IOTA_URL || 'http://localhost:14265',
  command: {
    'command': 'getTips'
  },
  apiVersion: '1.2.0'
};

helper.execAPI(config.url,config.command,config.apiVersion);

