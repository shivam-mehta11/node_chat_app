
//client
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
var timestamp =  new Date().getTime();
  socket.emit('createMessage', {
    from: 'Shivam',
    text: 'Yup, that works for me.',

  createdAt:new Date(timestamp)

  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
