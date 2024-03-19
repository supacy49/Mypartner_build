'use strict'

const Path = require('path')
const Hapi = require('hapi')
const Inert = require('inert')
const Moment = require('moment')
const fs = require('fs');
var zlib = require('zlib');
const Utils = require('./utils');
const MyChannelLogger = require('mychannel-logger');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
})
const APP_HOST = process.env.APP_HOST || '0.0.0.0'
const APP_PORT = process.env.APP_PORT || 3000
const USE_HTTPS = process.env.USE_HTTPS
if(USE_HTTPS === 'true'){
  const tls = {
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)
  };
  server.connection({host: APP_HOST, port: APP_PORT, tls: tls})
}
else{
  server.connection({host: APP_HOST, port: APP_PORT})
}

const proxyMap = JSON.parse(process.env.PROXY_MAP)

server.register(Inert, () => {})

server.register({
  register: require('mychannel-logger'),
  options: {
    log: {
      path: process.env.LOG_PATH,
      rotateTime: process.env.LOG_ROTATE_TIME
    },
    headers: [
      'postman-token', 'user-agent'
    ],
    hiddenFields: ['password']
  }
}, (err) => {
  if (err) {
    console.log(err);
  }

  const cookieOptions = {
    isSecure: false,
    isHttpOnly: false,
    passThrough: true,
    path: '/'
  };
  server.state('accessToken', cookieOptions);
  server.state('refreshToken', cookieOptions);

  server.ext('onPreResponse', (request, reply) => {
    var response = request.response;

    if (response.variety === 'plain') {
      response.header('X-Content-Type-Options', 'nosniff');
      response.header('X-XSS-Protection', '1; mode=block');
      response.header('Content-Security-Policy', 'default-src self');
      response.header('Strict-Transport-Security', 'max-age=63072000;includeSubdomains;preload');
    }
    else if(response.isBoom){
      response.output.headers['X-Content-Type-Options'] = 'nosniff';
      response.output.headers['X-XSS-Protection'] = '1; mode=block';
      response.output.headers['Content-Security-Policy'] = 'default-src "self"';
      response.output.headers['Strict-Transport-Security'] = 'max-age=63072000;includeSubdomains;preload';
    }


    if(response.output && response.data && response.output.statusCode === 500){
      response.output.payload = response.data;
    }
    reply.continue();
  });

  server.route({
    method: [
      'GET', 'POST', 'PUT', 'DELETE'
    ],
    path: '/api/{service}/{path*}',
    handler: function(request, reply) {
      const endpoint = proxyMap[request.params.service]
      const url = `${endpoint}/${request.params.path}${request.url.search}`;
      const loginPath = '/api/auth/login'

      Utils.sendRequest(request, url)
        .then((response) => {
          if (request.path === loginPath) {
            let _headers = response.headers;
            let redirectURL = response.body.data.redirectURL || '/';
            let accessToken = response.body.data.accessToken || '/';
            let refreshToken = response.body.data.refreshToken || '/';

            const redirectScript = `<html><head><meta http-equiv="refresh" content="0;URL='${redirectURL}'" /></head><body></body></html>`;

            if(USE_HTTPS === 'true'){
              let cookieOptions = {isSecure: true};
              reply(redirectScript)
              .state('accessToken', accessToken, cookieOptions)
              .state('refreshToken', refreshToken, cookieOptions);
            }
            else {
              reply(redirectScript)
              .state('accessToken', accessToken)
              .state('refreshToken', refreshToken);
            }

          } else {
            Utils.replyApiResponse(reply, response);
          }
        }).catch((err) => {
          if (request.path === loginPath) {
            reply(`<html><head><meta http-equiv="refresh" content="0;URL='${process.env.LOGIN_PAGE_URL}'" /></head><body></body></html>`);
          }
          else{
            Utils.replyApiResponse(reply, err);
          }
        });
    }
  })

  /**

    * Setup for static files.
    */

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'client-app',
        redirectToSlash: true,
        index: true
      }
    }
  });

  let clientApps = JSON.parse(process.env.CLIENT_APPS);

  for(let i=0; i < clientApps.length ; i++) {
    let clientApp = clientApps[i];
    server.route({
      method: 'GET',
      path: `/${clientApp.uri}/{param*}`,
      handler: {
        directory: {
          path: `${clientApp.directory}`,
          redirectToSlash: true,
          index: true
        }
      }
    });
  }

  /**
   * redirect to index.html for Single Page Application.
   */

  server.ext('onPostHandler', (request, reply) => {
    const response = request.response
    if (response.isBoom && response.output.statusCode === 404) {
      for(let i=0 ; i < clientApps.length ; i++) {
        let clientApp = clientApps[i];
        if (request.path.indexOf(`/${clientApp.uri}`) != -1) {
          return reply
          .file(`${clientApp.directory}/index.html`)
          .code(200);
        }
      }
      return reply
          .file('client-app/index.html')
          .code(200);
    }
    return reply.continue();
  });

  server.start(() => {
    console.log(`Frontend Web starting at: ${server.info.host}:${server.info.port}`);

    MyChannelLogger.writeEmptyLog({
        path: process.env.LOG_PATH,
        rotateTime: process.env.LOG_ROTATE_TIME,
        serviceNames: JSON.parse(process.env.SERVICE_NAMES)
    },true);
  })

})

module.exports = server;
