/**
 * Created by dm on 1/28/18.
 */
'use strict';

const request = require('request');

const config = {
  url: process.env.IOTA_URL || 'http://localhost:14265'
};

const command = {
  'command': 'getNodeInfo'
};

const options = {
  url: config.url,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-IOTA-API-Version': '1',
    'Content-Length': Buffer.byteLength(JSON.stringify(command))
  },
  json: command
};

request(options, function (error, response, data) {
  if (!error && response.statusCode === 200) {
    console.log(data);
  }
});


