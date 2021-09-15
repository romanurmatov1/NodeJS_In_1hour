// function hello(name) {
//    console.log('hello' + name);
// }

// hello('Roma ')

// console.log();


// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// var message = '';
// console.log(global.message); 

// console.log(module);

// var logger = require('./logger');
// console.log(logger);

// ---------------Path Modules --------------------

// const path = require('path');
// var pathob = path.parse(__filename);

// console.log(pathob.dir);

// -----------------OS module-------------------------------

// const os = require('os');
// var tm = os.totalmem();
// var fm = os.freemem();

// console.log(tm);
// console.log(fm);

// console.log(`Total memory is ${tm}`)

// -----------------File System Module--------------------
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err, files) {
//    if (err) console.log('Error', err);
//    else console.log('Result', files);
// })

// // ----------------Event Module----------------
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// // const em1 = new EventEmitter();
 
// // Register a listener
// emitter.on('messageLogged', (arg) => {
//    console.log('Listener called', arg);
// });
// em1.on('ss', function(arg) {
//    console.log('AA', arg)
// })




// em1.emit('ss', {id : 1, ss: 'salom'})

// ------HTTP Module----------------
const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.write('Salom');
      res.end();
   }

   if (req.url === '/api/shu') {
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
   }
});


server.listen(3000);

console.log('Listening on port 3000...');