const https = require('https');

module.exports = {
  agent: new https.Agent(),
  'server-url': 'http://localhost:8080/auth',
  realm: 'nodejs-test',
  'min-time-between-jwks-requests': 0,
  resource: 'confidential-client',
  secret: '62b8de48-672e-4287-bb1e-6af39aec045e',
  'public-client': false
};
