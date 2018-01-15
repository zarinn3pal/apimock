import * as handlers from './handlers';

let routes = [
  {
    method: 'GET',
    path: '/loop',
    handler: handlers.loop
  },
  {
  	method: 'GET',
  	path: '/csv2json',
  	handler: handlers.csv2json

  }
];

export default routes;
