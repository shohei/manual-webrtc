var WebSocket = require('ws')
  , ws = new WebSocket('ws://echo.websocket.org/');
ws.on('open', function() {
    ws.send('something');
});
ws.on('message', function(message) {
    console.log('received: %s', message);
});

