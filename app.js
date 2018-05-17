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
  handler: (request, response) => {
    // var functionValue;
     user.createUser(request.payload, function(err, data){
       console.log(data);
       return data;
     })


    // return null;
    //   if(err){
    //     console.log('got error');
    //   }else{
    //     functionValue = success;
    //   }
    // });
    // response.response(functionValue);
    // var accountMock = {};
    // if(request.params.username == 'Veer') {
    //   accountMock = {
    //     "username": "Ashish",
    //     "age": 45,
    //     "gender": "male"
    //   }
    // }
    // return accountMock;
  }
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
