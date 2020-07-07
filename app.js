

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

//---------------------------------------------------------------------------------------------------------------------------//
const express = require('express')
const app = express()
const port = 3000

app.use('/images', express.static('images'));

app.get('/farm1', (req, res) =>
  res.sendFile(__dirname + '/index.html')
)
app.get('/farm2', (req, res) =>
  res.sendFile(__dirname + '/index3.html')
)
app.get('/farm3', (req, res) =>
  res.sendFile(__dirname + '/index4.html')
)
app.get('/farm4', (req, res) =>
  res.sendFile(__dirname + '/index5.html')
)

app.get('/moveleft/:id', (req, res) =>{
  const onvif = require('node-onvif');

  let device = new onvif.OnvifDevice({
    xaddr: `http://${req.params.id}/onvif/device_service`,
    user: 'admin',
    pass: 'ciimostoiot95'
  });

  device.init().then(() => {

    let params = {
      'speed': { x: -1.0, y: 0.0, z: 0.0 },
      'timeout': 60
    };
    
    device.ptzMove(params).then(() => {
      console.log('Succeeded to move.');

      setTimeout(() => {
        device.ptzStop().then(() => {
          console.log('Succeeded to stop.');
        }).catch((error) => {
          console.error(error);
        });
      }, 1500);
    }).catch((error) => {
      console.error(error);
    });

  }).then(() => {
    console.log('Done!');
  }).catch((error) => {
    console.error(error);
  });

  res.end()
})


app.get('/moveright/:id', (req, res) =>{
  const onvif = require('node-onvif');

  let device = new onvif.OnvifDevice({
    xaddr: `http://${req.params.id}/onvif/device_service`,
    user: 'admin',
    pass: 'ciimostoiot95'
  });

  device.init().then(() => {

    let params = {
      'speed': { x: 1.0, y: 0.0, z: 0.0 },
      'timeout': 60
    };

    device.ptzMove(params).then(() => {
      console.log('Succeeded to move.');

      setTimeout(() => {
        device.ptzStop().then(() => {
          console.log('Succeeded to stop.');
        }).catch((error) => {
          console.error(error);
        });
      }, 1500);
    }).catch((error) => {
      console.error(error);
    });

  }).then(() => {
    console.log('Done!');
  }).catch((error) => {
    console.error(error);
  });

  res.end()
})

app.get('/movehight/:id', (req, res) =>{
  const onvif = require('node-onvif');

  let device = new onvif.OnvifDevice({
    xaddr: `http://${req.params.id}/onvif/device_service`,
    user: 'admin',
    pass: 'ciimostoiot95'
  });

  device.init().then(() => {

    let params = {
      'speed': { x: 0.0, y: 1.0, z: 0.0 },
      'timeout': 60
    };

    device.ptzMove(params).then(() => {
      console.log('Succeeded to move.');

      setTimeout(() => {
        device.ptzStop().then(() => {
          console.log('Succeeded to stop.');
        }).catch((error) => {
          console.error(error);
        });
      }, 1500);
    }).catch((error) => {
      console.error(error);
    });

  }).then(() => {
    console.log('Done!');
  }).catch((error) => {
    console.error(error);
  });

  res.end()
})

app.get('/movelow/:id', (req, res) =>{
  const onvif = require('node-onvif');

  let device = new onvif.OnvifDevice({
    xaddr: `http://${req.params.id}/onvif/device_service`,
    user: 'admin',
    pass: 'ciimostoiot95'
  });

  device.init().then(() => {

    let params = {
      'speed': { x: 0.0, y: -1.0, z: 0.0 },
      'timeout': 60
    };

    device.ptzMove(params).then(() => {
      console.log('Succeeded to move.');

      setTimeout(() => {
        device.ptzStop().then(() => {
          console.log('Succeeded to stop.');
        }).catch((error) => {
          console.error(error);
        });
      }, 1500);
    }).catch((error) => {
      console.error(error);
    });

  }).then(() => {
    console.log('Done!');
  }).catch((error) => {
    console.error(error);
  });

  res.end()
})

app.get('/movezoomout/:id', (req, res) =>{
  const onvif = require('node-onvif');

  let device = new onvif.OnvifDevice({
    xaddr: `http://${req.params.id}/onvif/device_service`,
    user: 'admin',
    pass: 'ciimostoiot95'
  });

  device.init().then(() => {

    let params = {
      'speed': { x: 0.0, y: 0.0, z: -1.0 },
      'timeout': 60
    };

    device.ptzMove(params).then(() => {
      console.log('Succeeded to move.');

      setTimeout(() => {
        device.ptzStop().then(() => {
          console.log('Succeeded to stop.');
        }).catch((error) => {
          console.error(error);
        });
      }, 1500);
    }).catch((error) => {
      console.error(error);
    });

  }).then(() => {
    console.log('Done!');
  }).catch((error) => {
    console.error(error);
  });

  res.end()
})

app.get('/movezoomin/:id', (req, res) =>{
  const onvif = require('node-onvif');

  let device = new onvif.OnvifDevice({
    xaddr: `http://${req.params.id}/onvif/device_service`,
    user: 'admin',
    pass: 'ciimostoiot95'
  });

  device.init().then(() => {

    let params = {
      'speed': { x: 0.0, y: 0.0, z: 1.0 },
      'timeout': 60
    };

    device.ptzMove(params).then(() => {
      console.log('Succeeded to move.');

      setTimeout(() => {
        device.ptzStop().then(() => {
          console.log('Succeeded to stop.');
        }).catch((error) => {
          console.error(error);
        });
      }, 1500);
    }).catch((error) => {
      console.error(error);
    });

  }).then(() => {
    console.log('Done!');
  }).catch((error) => {
    console.error(error);
  });

  res.end()
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// Stream = require('node-rtsp-stream')
// stream = new Stream({
//   name: 'name',
//   streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=5&subtype=0',
//   wsPort: 9010,
//   ffmpegOptions: { 
//     '-stats': '', 
//     '-r': 30 
//   }
// });

// Stream2 = require('node-rtsp-stream')
// Stream2 = new Stream({
//   name: 'name',
//   streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=12&subtype=0',
//   wsPort: 9001,
//   ffmpegOptions: { 
//     '-stats': '', 
//     '-r': 30 
//   }
// });

// Stream3 = require('node-rtsp-stream')
// Stream3 = new Stream({
//   name: 'name',
//   streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=13&subtype=0',
//   wsPort: 9002,
//   ffmpegOptions: { 
//     '-stats': '', 
//     '-r': 30
//   }
// });

// Stream4 = require('node-rtsp-stream')
// Stream4 = new Stream({
//   name: 'name',
//   streamUrl: 'rtsp://guest:Passw0rd@192.168.3.11:554/cam/realmonitor?channel=14&subtype=0',
//   wsPort: 9003,
//   ffmpegOptions: { 
//     '-stats': '', 
//     '-r': 30 
//   }
// });
//------------------------------------------------------------------------------------------------------------//

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

//----------------------------------------------------move camera start---------------------------------//
// const onvif = require('node-onvif');

// let device = new onvif.OnvifDevice({
//   xaddr: 'http://192.168.3.83:10080/onvif/device_service',
//   user : 'admin',
//   pass : 'ciimostoiot95'
// });

// device.init().then(() => {

//   let params = {
//     'speed': { x: 1.0, y: 0.0, z: 0.0 },
//     'timeout': 60 
//   };

//   device.ptzMove(params).then(() => {
//     console.log('Succeeded to move.');

//     setTimeout(() => {
//       device.ptzStop().then(() => {
//         console.log('Succeeded to stop.');
//       }).catch((error) => {
//         console.error(error);
//       });
//     }, 1500);
//   }).catch((error) => {
//     console.error(error);
//   });

// }).then(() => {
//   console.log('Done!');
// }).catch((error) => {
//   console.error(error);
// });
//----------------------------------------------------move camera end---------------------------------//



// device.init().then(() => {
//   // Move the camera
//   device.ptzMove({
//     'speed': {
//       x: -0.5, // Speed of pan (in the range of -1.0 to 1.0)
//       y: 0.0, // Speed of tilt (in the range of -1.0 to 1.0)
//       z: 0.0  // Speed of zoom (in the range of -1.0 to 1.0)
//     },
//     'timeout': 1 // seconds
//   });
// }).then(() => {
//   console.log('Done!');
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