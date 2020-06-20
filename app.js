Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=1&subtype=0',
  wsPort: 29000,
  ffmpegOptions: { // options ffmpeg flags
    // '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})





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