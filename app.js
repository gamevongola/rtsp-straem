

// const app = require('express')();
// const http = require('http');
// const rtsp = require('rtsp-ffmpeg');
// const server = http.createServer(app).listen(8080);
// const io = require('socket.io')(server);

// var uri = 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=1&subtype=0',
//   stream = new rtsp.FFMpeg({ input: uri });

// io.on('connection', function (socket) {
//   var pipeStream = function (data) {
//     socket.emit('data', data.toString('base64'));
//   };
//   stream.on('data', pipeStream);
//   socket.on('disconnect', function () {
//     stream.removeListener('data', pipeStream);
//   });
// });

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/farm1', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/farm2', (req, res) => res.sendFile(__dirname + '/index3.html'))
app.get('/farm3', (req, res) => res.sendFile(__dirname + '/index4.html'))
app.get('/farm4', (req, res) => res.sendFile(__dirname + '/index5.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=14&subtype=0',
  wsPort: 9000,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

Stream2 = require('node-rtsp-stream')
Stream2 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=9&subtype=0',
  wsPort: 9001,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

Stream3 = require('node-rtsp-stream')
Stream3 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=5&subtype=0',
  wsPort: 9002,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

Stream4 = require('node-rtsp-stream')
Stream4 = new Stream({
  name: 'name',
  streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=13&subtype=0',
  wsPort: 9003,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
});

// const Stream = require('videoStream')

// const options = {
//   name: 'streamName',
//   url: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
//   port: 5000
// }

// stream = new Stream(options)

// stream.start()





// const onvif = require('node-onvif');

// // Create an OnvifDevice object
// let device = new onvif.OnvifDevice({
//   xaddr: 'http://192.168.0.38/onvif/device_service',
//   user : 'admin',
//   pass : 'admin'
// });


// device.init().then(() => {
//     // Get the UDP stream URL
//     let url = device.getUdpStreamUrl();
//     console.log(url);
// }).catch((error) => {
//     console.error(error);
// });

// const onvif = require('node-onvif');

// console.log('Start the discovery process.');
// // Find the ONVIF network cameras.
// // It will take about 3 seconds.
// onvif.startProbe().then((device_info_list) => {
//   console.log(device_info_list.length + ' devices were found.');
//   // Show the device name and the URL of the end point.
//   device_info_list.forEach((info) => {
//     console.log('- ' + info.urn);
//     console.log('  - ' + info.name);
//     console.log('  - ' + info.xaddrs[0]);
//   });
// }).catch((error) => {
//   console.error(error);
// });

// const onvif = require('node-onvif');
 
// // Create an OnvifDevice object
// let device = new onvif.OnvifDevice({
//   xaddr: 'http://192.168.0.38/onvif/device_service',
//   user : 'admin',
//   pass : 'P@ssw0rd'
// });
 
// // Initialize the OnvifDevice object
// device.init().then((info) => {
//   // Show the detailed information of the device.
//   console.log(JSON.stringify(info, null, '  '));
// }).catch((error) => {
//   console.error(error);
// });