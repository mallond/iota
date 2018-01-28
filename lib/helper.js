/**
 * Created by dm on 1/28/18.
 */
'use strict';
const request = require('request');

const execAPI = (iota_url,command,api_version) => {

  const options = {
    url: iota_url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-IOTA-API-Version': api_version,
      'Content-Length': Buffer.byteLength(JSON.stringify(command))
    },
    json: command
  };

  request(options, function (error, response, data) {
    if (!error && response.statusCode === 200) {
      console.log(JSON.stringify(data,null,2));
    } else {
      console.log('Response code:',response.statusCode);
      if (error) {
        console.log(JSON.stringify(error,null,2));
      } else {
        console.log(JSON.stringify(data,null,2));
      }
    }
  });

};

module.exports = {
  execAPI:execAPI
};
