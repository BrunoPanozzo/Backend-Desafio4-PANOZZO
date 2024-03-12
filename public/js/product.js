//lado cliente, browser
 const socket = io()

 socket.emit('saludo', 'msje del browser al servidor')