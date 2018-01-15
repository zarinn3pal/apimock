'use strict';
import routes from './api';

const Hapi = require('hapi');
var Good = require('good');

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8001
});

async function loggi(){
 try{
 await server.register({
  register: Good,
  options: {
    ops: {
      interval: 10000
    },
    reporters: {
      console: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [ { log: '*', response: '*', request: '*' } ]
        },
        {
          module: 'good-console'
        },
        'stdout'
      ]
    }
  }
});
}
 catch (err) {
        console.log(err);}

}
// Add the route
server.route(routes);
loggi();

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
    console.log(server.info);
};

start();
