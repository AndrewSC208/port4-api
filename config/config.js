const milieu = require('milieu');

const config = milieu('port4-api-test', {
  environment: 'production',
  server: {
    port: 8080
  },
  mongo: {
    url: 'mongodb://test:toTheMoon@ds145385.mlab.com:45385/port4-messages'
  }
});


module.exports = config;
