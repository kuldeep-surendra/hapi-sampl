'use strict';
const user = require('./User/user.js');

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, response) => {
    return 'Hello World';
  }
});

server.route({
  method: "POST",
  path: "/user/create",
  handler: user.createUser
  // (request, response) => {
  //   // var functionValue;
  //    user.createUser(request.payload, function(err, data){
  //      if(err){
  //        console.log('Error');
  //      }else{
  //        return data;
  //      }
  //    })
  // }
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
