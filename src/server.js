const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// import pkg from '@hapi/hapi'
// const {Hapi} = pkg
// import routes from './routes';
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();